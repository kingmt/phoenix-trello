// Generated by CoffeeScript 1.8.0
(function() {
  module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-eco');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    return grunt.initConfig({
      watch: {
        coffee: {
          files: 'src/*.coffee',
          tasks: ['coffee:compile']
        },
        eco: {
          files: 'templates/*.eco',
          tasks: ['eco:compile']
        }
      },
      coffee: {
        compile: {
          expand: true,
          flatten: true,
          options: {
            sourceMap: true
          },
          cwd: 'src/',
          src: ['*.coffee'],
          dest: 'compiled/',
          ext: '.js'
        }
      },
      eco: {
        compile: {
          src: 'templates/*.eco',
          dest: 'compiled/templates.js'
        }
      }
    });
  };

  grunt.registerTask('build', ['coffee', 'eco']);

  grunt.registerTask('default', ['build', 'watch']);

}).call(this);
