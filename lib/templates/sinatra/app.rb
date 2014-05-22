# encoding: utf-8
require 'sinatra/base'
require 'yaml'
require 'haml'
require 'sass'
require 'compass'
require 'data_mapper'

class App < Sinatra::Base


  ######################################
  # INCLUDES                           #
  ######################################

  # Include Session Cookie Module
  use Rack::Session::Cookie, :secret => '<secret>'


  ######################################
  # CONFIGURATION                      #
  ######################################

  # Development Specific configs
  configure :development do
    DataMapper::Logger.new($stdout, :debug)
  end

  # Production specific configs
  configure :production do
    YAML.load_file(File.dirname(__FILE__) + '/config/production.yaml').each do |k, v|
      set k, v
    end
  end

  # General ENV configuration
  configure do

    # Compass
    Compass.configuration do |config|
      config.project_path = File.dirname(__FILE__)
      config.sass_dir = 'assets/styles'
    end

    # Database
    dbconf = YAML.load_file(File.dirname(__FILE__)+'/config/database.yaml')

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
    set :app_file      , __FILE__
    set :root          , File.dirname(__FILE__)
    set :public        , File.dirname(__FILE__) + '/public'
    set :views         , File.dirname(__FILE__) + '/app/views'
    set :tests         , File.dirname(__FILE__) + '/tests'

    set :haml          , :format => :html5
    set :sass          , Compass.sass_engine_options
    # set :scss          , Compass.sass_engine_options

    set :dump_errors   , true
    set :logging       , true
    set :raise_errors  , true

    # Load general configs from the file
    YAML.load_file(File.dirname(__FILE__)+'/config/development.yaml').each do |k, v|
      set k, v
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


  ######################################
  # ASSETS                             #
  ######################################

  get 'public/styles/style.css' do
    sass :style
  end

  get 'public/styles/:file.js' do
    coffee params[:file].to_sym
  end

end


######################################
# INITIALIZE                         #
######################################

# Load up all helpers first
Dir[File.dirname(__FILE__) + '/app/helpers/*.rb'].each { |file| require file }

# Load up all models next
Dir[File.dirname(__FILE__) + '/app/models/*.rb'].each { |file| require file }

DataMapper.finalize

# Load up all controllers last
Dir[File.dirname(__FILE__) + '/app/controllers/*.rb'].each { |file| require file }

# DataMapper.auto_upgrade!
