/**
 * Created with JetBrains WebStorm.
 * User: hulstkan
 * Date: 19.06.13
 * Time: 18:50
 * To change this template use File | Settings | File Templates.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        uglify: {
            dist: {
                files: {
                    'contents/scripts/ah.min.js': 'contents/scripts/ah.js',
                    'contents/articles/ux-inline-validation-while-user-enters-value/js/ah.min.js': 'contents/articles/ux-inline-validation-while-user-enters-value/js/ah.js'
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'contents/css/ah.min.css': ['contents/css/main.css', 'contents/css/monokai.css']
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Load the plugin that provides the minify task
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin']);

};