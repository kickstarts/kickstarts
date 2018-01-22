module Jekyll
  module Converters
    class Markdown
      class RedcarpetParser
        module CommonMethods
          def header(title, level)
            @headers ||= []
            permalink = title.gsub(/([[:space:]]|[[:punct:]])+/, '-')

            if @headers.include? permalink
              permalink += '_1'
              permalink = permalink.succ while @headers.include? permalink
            end
            @headers << permalink
            %(
              <h#{level} id=\"#{permalink}\">
                <a name="#{permalink}" href="##{permalink}"></a>#{title}
              </h#{level}>
            )
          end
        end

        module WithPygments
          include CommonMethods
          def block_code(code, lang)
            require 'pygments'
            lang = lang && lang.split.first || "text"
            output = add_code_tags(
              Pygments.highlight(code, :lexer => lang, :options => { :encoding => 'utf-8', :lineanchors => 'line' }),
              lang
            )
          end
        end
      end
    end
  end
end
