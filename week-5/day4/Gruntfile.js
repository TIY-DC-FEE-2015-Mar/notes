module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        jshint: {
            options: {
                jshintrc: true
            },
            all: [ 'js/*.js', 'js/views/*.js' ]
        },

        sass: {           // task name
            project: {    // target name
                files: {
                    'dist/css/main.css': 'scss/main.scss'
                }
            }
        },

        watch: {
            js: {
                files: [ 'js/*.js' ],
                tasks: [ 'js-build' ]
            },
            sass: {
                files: [ 'scss/**/*.scss' ],
                tasks: [ 'css-build' ]
            }
        },

        clean: [ 'dist/' ],

        copy: {
            html: {
                expand: true,
                src: ['*.html'],
                dest: 'dist/'
            },
            vendorjs: {
                expand: true,
                src: ['jquery.js'],
                dest: 'dist/js/vendor/',
                cwd: 'js/vendor/jquery/dist/'
            }
        },

        concat: {
            options: {
                separator: ';',
                sourceMap: true
            },
            js: {
                src: ['js/*.js'],
                dest: 'dist/js/app.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('js-build', ['jshint', 'concat:js']);
    grunt.registerTask('css-build', ['sass']);
    grunt.registerTask('default', [ 'clean', 'copy', 'js-build', 'css-build' ]);
};
