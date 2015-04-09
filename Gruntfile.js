module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      dist: {
        cwd: 'src/', expand: true, src: '**', dest: 'dist/'
      }
    },
    // Remove unused CSS across multiple files, compressing the final output
    uncss: {
    dist: {
      files: [
        { src: 'src/*.html', dest: 'dist/css/compiled.min.css'}
      ]
      },
      options: {
        compress:true
      }
    },
    processhtml: {
      dist: {
        files: {
        'dist/index.html': ['src/index.html']
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/js/compiled.min.js': ['src/js/bootstrap.js', 'src/js/dragend.js', 'src/js/ZeroClipboard.js', 'src/js/data.js', 'src/js/app.js'  ] // Load in the correct order
        }
      }
    }
  });
  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Default tasks.
  grunt.registerTask('default', ['copy', 'uglify', 'uncss','processhtml']);
};