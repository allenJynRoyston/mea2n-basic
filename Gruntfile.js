module.exports = function(grunt) {

	// required
  require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

  // grunt plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');


  // Project configuration.
  grunt.initConfig({

    //-------------
    concurrent: {
      options:{
        limit: 10,
        logConcurrentOutput: true
      },
  		watch: [
        'shell:start', 'watch:reloads', 'nodemon:dev'
       ]
  	},
    //-------------



    //-------------
    watch: {

      //------------------
		  reloads: {
		    files: [
          'views/*.*',
          'public/app/**/*.*',
        ],
		    options: {
					livereload: 35729,	// https://github.com/gruntjs/grunt-contrib-watch#optionslivereload
		      spawn: false
		    },
		  },
		  //------------------
    },
    //-------------


    //--------------------------
		/* WATCHES FOR CHANGES ON APP.JS FILE */
		nodemon: {
			  dev: {
			    script: 'app.js'
			  },
		},
		//--------------------------


    //-------------
		shell: {
        options: {
            stderr: false,
            maxBuffer: Infinity
        },
        start: {
            command: 'npm start'
        }
    }
    //-------------

  });


  // ***** GRUNT COMMANDS *******//
  //*****************************//


    // -------------------
  	grunt.registerTask('default', ['concurrent:watch']);
    // -------------------

  //*****************************//

};
