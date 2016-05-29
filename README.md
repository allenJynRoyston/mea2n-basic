# Express / Angular 2 Easy setup

### Why?

Quite simply, Express is awesome and Angular 2 is awesome, but getting them to work isn't as fluid as you'd think it would be.  This package eliminates all the fuss and only includes the bare basics so you can customize your project the way you like.  Think of it like a clean Windows install; all the functionality you'd want without any of the bloatware.
 
Install includes:
  - Express 4.0 
  - Angular 2 
  - Grunt (optional)
  - File watching and automatic browser refresh (if grunt is running)

Express side:
  - Built in mobile/iPad/OS user detection (accessible throughtout the entire site)
  - Quick API and routing setup
  - Jade templating
  
Angular 2 side:
  - Built in mobile/iPad/OS user detection (accessible globally)
  - Quick API and routing setup
   
Required:
  - NPM (Node Package Manager)
  - Atom editor *recommended, but not required (for easy Jade -> HTML auto compiling)
  - Typescript *recommended, but again not required.

Install instructions:
  - Clone this repo
  - change to repo directory
```sh
$ cd myDirectory
```
  - npm install 
```sh
$ npm install
```
  - last few packages will error out (this is normal, just ignore)
```sh
npm ERR! peerinvalid Peer grunt-shell@1.3.0 wants grunt@>=0.4.0
npm ERR! peerinvalid Peer grunt-contrib-watch@0.6.1 wants grunt@~0.4.0
npm ERR! peerinvalid Peer load-grunt-tasks@3.5.0 wants grunt@>=0.4.0
npm ERR! peerinvalid Peer grunt-concurrent@2.3.0 wants grunt@>=0.4.0
npm ERR! peerinvalid Peer grunt-nodemon@0.4.2 wants grunt@>=0.4.0
```
  - start the server with grunt (which comes preinstalled and is recommended)
```sh
$ grunt
```
  - or simply with 
```sh
$ npm start
```
  - Open up a browser of your choice (Chrome/Firefox/etc) and enter the url:  
```sh
http://localhost:3000/
```

### Easy Deploy with Heroku
Ensure that you have a valid, working Heroku repository.  Copy/paste/clone this repo into it.  Then:
```sh
$ git add . 
$ git commit -m "it works!"
$ git push heroku master
```

### Additional stuff
- Grunt (if you're using it) will watch for changes on any html/css/js and refresh the browser automatically.
- Typescript will convert any .ts into .js automatically.
- Jade files can automatically be converted into HTML if using the Atom Plugin: Jade Auto-compiler.  
- A very simple global variable is setup on the index page that can be accessed throught the entire site.  To access it (anywhere, regardless of script or component):  
```sh
$ console.log(_root.global)

// will return: 
/*
    _root = {
      globals: {
        enviroment: [production/development],
        isMobile: [true/false],
        isIphone: [true/false],
        isIpad: [true/false],
        isAndroid: [true/false],
        userAgent: [string]
      }
    }
*/
```
##### This feature can be removed entirely by removing it from the route/index.jade
