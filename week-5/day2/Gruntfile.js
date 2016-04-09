module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        connect: {
            server: {
                options: {
                    port: 8888,
                    base: '.'
                }
            }
        },
        mocha: {
            all: {
                options: {
                    src: [
                        'http://localhost:8888/test/my-app.html',
                        'http://localhost:8888/test/search.html'
                    ]
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('test', [ 'connect', 'mocha' ]);
    grunt.registerTask('default', [ '' ]);
};
