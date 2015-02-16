# encoding: UTF-8

class Task
  include DataMapper::Resource
  property :id,             Serial
  property :title,          String
  property :description,    Text
  property :date,           DateTime
end
