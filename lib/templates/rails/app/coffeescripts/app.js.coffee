Site =
  init: ->
    console.log 'started'

  test: ->
    console.log 'test'


$ =>
  Site.init()
  Site.test()