# encoding: utf-8

require 'sinatra/base'
require 'compass'
require 'haml'
require 'yaml'
require 'data_mapper'
require 'dm-migrations'
require 'logger'


class App < Sinatra::Base

  ######################################
  # VARIABLES                          #
  ######################################

  ROOT_PATH = File.dirname(__FILE__)


  ######################################
  # CONFIGURATION                      #
  ######################################

  # Register Sinatra Flash
  register Sinatra::Flash

  # set X-UA-Compatible appropriately
  use Rack::Compatible

  # Session Configuration
  use Rack::Session::Cookie, :key => 'rack.session',
                             :domain => 'foo.com',
                             :path => '/',
                             :expire_after => 2592000,
                             :secret => 'change_me',
                             :old_secret => 'also_change_me'

  # Logger Configuration
  Dir.mkdir('log') unless File.exist?('log')
  class ::Logger; alias_method :write, :<<; end
  case ENV["RACK_ENV"]
    when "production"
      logger = ::Logger.new("log/production.log")
      logger.level = ::Logger::WARN
    when "development"
      logger = ::Logger.new(STDOUT)
      logger.level = ::Logger::DEBUG
    else
      logger = ::Logger.new("/dev/null")
  end
  # use Rack::CommonLogger, logger


  # General Configuration
  configure do

    # Database
    dbconf = YAML.load_file(ROOT_PATH + '/config/database.yaml')

    case dbconf["adapter"]
      when "mysql"
        dbconf = dbconf[ENV['RACK_ENV']]
        DataMapper.setup(:default, "mysql://#{dbconf["username"]}:#{dbconf["password"]}@#{dbconf["host"]}/#{dbconf["database"]}")
      when "postgres"
        dbconf = dbconf[ENV['RACK_ENV']]
        DataMapper.setup(:postgres, "postgres://#{dbconf["username"]}:#{dbconf["password"]}@#{dbconf["host"]}/#{dbconf["database"]}")
      when "sqlite3"
        DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/db/application.db")
    end

    # Enable sessions for all ENV's
    enable :sessions

    # Set up our general configs
    set :app_file       , __FILE__
    set :root           , ROOT_PATH
    set :views          , settings.root + '/app/views'

    set :haml           , {:format => :html5}
    set :sass           , {:debug_info => false}
    Compass.add_project_configuration(File.join(settings.root, 'config', 'compass.rb'))

    set :run            , false
    set :dump_errors    , true
    set :logging        , true
    set :raise_errors   , true
    set :sessions       , true

    # Load general configs from the file
    appconf = YAML.load_file(ROOT_PATH + '/config/app.yaml')

    appconf.each do |k, v|
      set k, v
    end

  end

  # Development Configuration
  configure :development do
    DataMapper::Logger.new($stdout, :debug)
    YAML.load_file(ROOT_PATH + '/config/development.yaml').each do |k, v|
      set k, v
    end
  end

  # Production Configuration
  configure :production do
    YAML.load_file(ROOT_PATH + '/config/production.yaml').each do |k, v|
      set k, v
    end
  end

  ######################################
  # ASSETS                             #
  ######################################

  get '/stylesheets/:name.css' do
    content_type 'text/css', :charset => 'utf-8'
    sass :"stylesheets/#{params[:name]}", Compass.sass_engine_options
  end

  get '/' do
    haml :index
  end


  ######################################
  # FLASH HELPERS                      #
  ######################################

  helpers do
    # Set an error in the flash and redirect
    def set_error(message, path)
      flash[:error] = message
      redirect path
    end
    # Set a notice in the flash and redirect
    def set_notice(message, path)
      flash[:notice] = message
      redirect path
    end
  end


  ######################################
  # HANDLING ERRORS                    #
  ######################################

  # Log error and redirect
  error do
    logger.error env['sinatra.error'].message # log this to the output
    redirect to('500.html')
  end

  # Redirect to static 404 page
  not_found do
      redirect to('404.html')
  end

end



######################################
# INITIALIZE                         #
######################################

# Load up all helpers first
Dir[ROOT_PATH + '/app/helpers/*.rb'].each { |file| require file }

# Load up all models next
Dir[ROOT_PATH + '/app/models/*.rb'].each { |file| require file }

DataMapper.finalize

# Load up all controllers last
Dir[ROOT_PATH + '/app/controllers/*.rb'].each { |file| require file }

