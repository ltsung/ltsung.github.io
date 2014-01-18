module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist:  {
        files: {
          './assets/styles/main.css': './assets/styles/main.scss'
        }
      }
    },

    cssmin: {
      css: {
        src: './assets/styles/main.css',
        dest: './assets/styles/main.min.css'
      }
    },    

    watch: {
      options: {
        livereload: true
      },
      html: {
        files: ['index.html']
      },
      css: {
        files: ['./assets/styles/*.scss'],
        tasks: ['sass']
      }
    },

    connect: {
      server: {
        options: {
          port: 4000,
          base: '.'
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // To only run CSS minification tasks, use "grunt cssminify"
  grunt.registerTask('cssminify', ['cssmin']);

  // To run our default suite, use "grunt"
  grunt.registerTask('default', ['connect', 'watch']);
};
