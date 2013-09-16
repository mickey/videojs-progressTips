'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    clean: {
      files: ['dist']
    },
    coffee: {
      compile: {
        files: {
          'dist/videojs.progressTips.js': 'src/videojs.progressTips.coffee',
        }
      }
    },
    uglify: {
      dist: {
        src: 'dist/videojs.progressTips.js',
        dest: 'dist/videojs.progressTips.min.js'
      },
    },
    copy: {
      dist: {
        src: 'src/videojs.progressTips.css',
        dest: 'dist/videojs.progressTips.css'
      }
    },
    cssmin: {
      dist: {
        src: 'src/videojs.progressTips.css',
        dest: 'dist/videojs.progressTips.min.css'
      }
    },
    usebanner: {
      taskName: {
        options: {
          position: 'top',
          banner: '<%= banner %>'
        },
        files: {
          src: [
            'dist/videojs.progressTips.js',
            'dist/videojs.progressTips.min.js',
            'dist/videojs.progressTips.min.css',
            'dist/videojs.progressTips.css'
          ]
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-banner');

  // Default task.
  grunt.registerTask('default', ['clean', 'coffee', 'uglify', 'copy', 'cssmin', 'usebanner']);

};
