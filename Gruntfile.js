/*
Gruntfile for refactored webassets.
*/
/*jshint node: true  */
module.exports = function(grunt) {
    'use strict';
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            /*The rules for JS hinting can be found at
             http://www.jshint.com/docs/options/
             */
            options: {
                scripturl:true, 
                bitwise: true,
                curly: true,
                eqeqeq: true,
                es3: true,
                forin: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                noempty: true,
                nonew: true,
                undef: true,
                //trailing:true,
                //indent:4,
                quotmark: 'single',
                //              smarttabs:true,
                browser: true,
                jquery: true,
                predef: [
                ],
                ignores: ['html_templates/js/development/theme/handlebars.js',
                    
                ],

                globals: {
                    
                }
            },
            /*'all' is an array of files / folders that are to be included in the JS Lint*/
            files: {
                src: [
                    //'common/js/development/theme/**/*',

                ]
            }
        },
        /*
      The command below is used to minify all the grouped files into their corresponding min files.
      */
       
                    
        less: {
            development: {
                files: {
                    //bootstrap less compile
                    //'css/development/bootstrap.css': 'common/less/bootstrap/bootstrap.less',
                    //theme less compile
                    'css/development/theme.css': 'less/theme.less',
                }
            },
            production: {
                options: {
                    compress: true,
                    cleancss: true
                },
                files: {
                    //theme less compile
                    'css/production/theme.css': 'less/theme.less',
                }
            }
            
            
        },

        /** CSS lint rules **/
        csslint: {
            options: {
                'display-property-grouping': true,
                'duplicate-properties': true,
                'known-properties': true,
                'non-link-hover': true,
                'box-sizing': false, //errors in IE6-7 - non caught error
                'compatible-vendor-prefixes': false,
                'gradients': true,
                'vendor-prefix': false,
                'fallback-colors': true,
                'star-property-hack': true,
                'underscore-property-hack': true,
                'bulletproof-font-face': true,
                'import': true,
                'universal-selector': true,
                'shorthand': true,
                'outline-none': false, //Needed for accessibility
                'zero-units': true,


                'overqualified-elements': false, //current
                'empty-rules': false,
                'unique-headings': false,
                'important': false,
                'adjoining-classes': false,
                'regex-selectors': false,
                'unqualified-attributes': false,
                'ids': false,
                'duplicate-background-images': false,
                'floats': false,
                'font-sizes': false,
                'box-model': false,
                'qualified-headings': false,
                'text-indent': false
            },
            src: ['css/development/development/theme.css']
            //src:['html_templates/css/development/ideal.css']
        }
    });

    //Load the plugin that provides the various tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-jsdoc');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify']);
    grunt.registerTask('lintcss', ['less:development', 'csslint', 'less:production']);

     grunt.task.registerTask('singleJsHint', 'A sample task that run one test.', function(filePath) {
            if(!!filePath)
                    grunt.config('jshint.files.src', [filePath]);
            grunt.task.run('jshint');
    });
}