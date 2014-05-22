class User
    include DataMapper::Resource
    property :id, Serial
    property :name, String
    property :email, Text
	  property :password, Text    
    property :created_at, DateTime
end