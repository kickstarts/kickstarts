class App < Sinatra::Base
	# Show the index.haml page
	get '/' do
		haml :index
	end
end
