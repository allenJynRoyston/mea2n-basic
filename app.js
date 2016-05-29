// express setup
var express = require('express'),
    path = require('path');

// npm modules
var favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    os = require('os'),
    compression = require('compression');

// routes
var site = require('./routes/index'),
		api = require('./routes/api'),
    router = express.Router();

// app
var app = express();

// view engine setup
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(compression());                                                         // https://www.npmjs.com/package/compression
app.use(require('prerender-node'));                                             // https://prerender.io/
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// pathing
app.use('/node_modules',  express.static(__dirname + '/node_modules'));

// route middleware that will happen on every request
router.use(function(req, res, next) {

  //-------------------
  if(req.headers.host == 'localhost:3000'){
    req.enviroment = "development";
  }else{
    req.enviroment = "production";
  }
  //-------------------

	//------------------- user detection
  var ua = req.header('user-agent');

	// detect mobile
	if(/mobile/i.test(ua)) {
			isMobile = true;
	} else {
			isMobile = false;
	}

	// detect iPhone
	if(/iPhone/i.test(ua)) {
			isIphone = true;
	} else {
			isIphone = false;
	}

	// detect iPhone
	if(/iPad/i.test(ua)) {
			isIpad = true;
	} else {
			isIpad = false;
	}

	// detect Android
	if(/Android/i.test(ua)) {
			isAndroid = true;
	} else {
			isAndroid = false;
	}
	//-------------------

	//-------------------
  var device = {
		enviroment: req.enviroment,
		isMobile: isMobile,
		isIphone: isIphone,
		isIpad: isIpad,
		isAndroid: isAndroid,
		userAgent: ua
	};
	//-------------------

	req.device = device;
	next();
})


// routing
router.get('/api/v1/', api.endpoint);
router.get('/*', site.home);


// initiate
app.use('/',  router);

// 404 and redirect
app.use(function(req, res, next) {
  res.redirect("/")
});

// DEV ERROR
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// PRODUCTION ERROR
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// export app
module.exports = app;
