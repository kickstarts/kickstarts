var app             = require('app'),
	BrowserWindow   = require('browser-window');

// TODO: Fix Foo

require('crash-reporter').start();

var mainWindow = null;

// QUIT WHEN ALL WINDOWS CLOSED
app.on('window-all-closed', function() {
	if (process.plataform !== 'darwin') {
		app.quit();
	}
});

app.on('ready', function() {

	var atomScreen 	= require('screen'),
  		size 		= atomScreen.getPrimaryDisplay().workAreaSize;

	// CREATE THE WINDOW BROWSER AND SETTINGS
	var mainOptions = {
		width: size.width,
		height: size.height,
		icon: '/assets/images/window.png'
	};
	mainWindow = new BrowserWindow(mainOptions);

	// LOAD APP URL
	mainWindow.loadUrl('file://' + __dirname + '/index.html');

	// DESTROY WINDOW WHEN CLOSED
	mainWindow.on('closed', function() {
		mainWindow = null;
	});

	// DEBUG APPLICATION
	if (process.env.NODE_ENV !== 'production') {
		mainWindow.openDevTools()
	}

});
