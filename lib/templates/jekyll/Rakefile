# Rakefile
# Author: Vitor Britto
# Version: 1.0.0
# Made with Ruby, Coffee and Love. :)

task default: [:watch]

task :build do
  build_sass
  build_javascript
  build_jekyll
end

task :watch do
    build_sass

    pids = [
        spawn("grunt watch"),
        spawn("compass watch"),
        spawn("jekyll server --watch")
    ]

    trap "INT" do
        Process.kill "INT", *pids
        exit 1
    end

    pids.each do |pid|
        Process.wait pid
    end

    # loop do
    #     sleep 1
    # end
end

def build_sass
  system("compass compile")
end

def build_javascript
  system("grunt build")
end

def build_jekyll
  system("jekyll build")
end