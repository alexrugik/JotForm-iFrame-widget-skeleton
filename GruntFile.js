'use strict';
module.exports = function (grunt) {
  grunt.initConfig({
    cssmin : {
      combine : {
        files : {
          'min/styles.min.css' : [
            'css/main.css'
          ]
        }
      }
    },
    uglify: {
      options: {
        sourceMap: true
      },
      all: {
        files : {
          'min/scripts.min.js' : [
            'js/main.js'
          ]
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['uglify:all','cssmin']);
};
