# More info at https://github.com/guard/guard#readme

guard 'haml', :output => 'public', :input => 'app/views' do
  watch(/^app\/views\/(.*)\.haml/)
end

guard 'compass', :notification => true do
  watch(/^app\/stylesheets\/(.*)\.s[ac]ss/)
end

guard 'coffeescript', :input => 'app/coffeescripts', :output => 'public/js'

guard 'process', :name => 'Minify lib javascript', :command => 'juicer merge public/js/libs/libs.js --force -s -o public/js/libs.min.js' do
  watch %r{public/js/libs/libs\.js}
end

guard 'process', :name => 'Minify app javascript', :command => 'juicer merge public/js/app.js --force -s' do
  watch %r{public/js/app\.js}
end

guard 'process', :name => 'Minify CSS', :command => 'juicer merge public/css/screen.css --force -c none' do
  watch %r{public/css/screen\.css}
end

guard 'livereload', :apply_js_live => true, :apply_css_live => true do
  watch(%r{(public/).+\.(css|js|html)})
end
