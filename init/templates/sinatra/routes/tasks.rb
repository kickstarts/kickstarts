# encoding: UTF-8

get '/api/tasks' do
  format_response(Task.all, request.accept)
end

get '/api/tasks/:id' do
  task ||= Task.get(params[:id]) || halt(404)
  format_response(task, request.accept)
end

post '/api/tasks' do
  body = JSON.parse request.body.read
  task = Task.create(
    title:          body['title'],
    description:    body['description'],
    date:           body['date']
  )
  status 201
  format_response(task, request.accept)
end

put '/api/tasks/:id' do
  body = JSON.parse request.body.read
  task ||= Task.get(params[:id]) || halt(404)
  halt 500 unless Task.update(
    title:          body['title'],
    description:    body['description'],
    date:           body['date']
  )
  format_response(task, request.accept)
end

delete '/api/tasks/:id' do
  task ||= Task.get(params[:id]) || halt(404)
  halt 500 unless Task.destroy
end
