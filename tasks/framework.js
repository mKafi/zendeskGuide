/**
 * Load the plugins.
 */
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const sass = require('gulp-sass')(require('sass'))
const { src, dest, parallel }  = require('gulp')


/**
 * Load the guide theme dev kit configurations.
 */
const userConfig = require('../config.json')
const systemConfig = require('../tasks/config.json')


/**
 * Get the task arguments.
 */
const args = require('yargs').argv


/**
 * GULP TASK: framework.compile.
 */
exports.compile = parallel(
    frameworkStyles,
    frameworkScripts
)


/**
 * TASK: frameworkStyles.
 */
function frameworkStyles () {
    let stream = src(systemConfig.framework.styles)
        .pipe( rename({ basename: 'global' }) )
        .pipe( sass() )
        /*.pipe( uglifycss() )*/
        .pipe( dest('./compiled/framework/') )

    console.log('TASK: compiling framework styles ...')

    return stream
}


/**
 * TASK: frameworkScripts
 */
function frameworkScripts () {
    let stream = src(systemConfig.framework.scripts)
        .pipe( concat('global.js') )
        /*.pipe( uglify() )*/
        .pipe( dest('./compiled/framework/') )

    console.log('TASK: compiling framework scripts ...')

    return stream
}
