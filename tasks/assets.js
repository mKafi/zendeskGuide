/**
 * Load the plugins.
 */
const concat = require('gulp-concat')
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
 * GULP TASK: assets.compile.
 */
exports.compile = parallel(
    assetsStyles,
    assetsScripts
)


/**
 * TASK: assetsStyles.
 */
function assetsStyles () {
	let stream = ''
	for (let i in systemConfig.env) {
        for (let j in userConfig[args.brand].styles) {
            stream = src('./lib/' + args.brand + '/sass/' + userConfig[args.brand].styles[j].name + '.scss')
                .pipe( sass() )
                /*.pipe( uglifycss() )*/
                .pipe( dest('./compiled/custom/' + args.brand + '/' + systemConfig.env[i]) )

            console.log('TASK: compiling ' + args.brand + ' :: ' + systemConfig.env[i] + ' styles  ...')
        }
    }

    return stream
}


/**
 * TASK: assetsScripts.
 */
function assetsScripts () {
    let stream = ''
    for (let i in systemConfig.env) {
    	for (let j in userConfig[args.brand].scripts) {
    		let rawFiles = ['./lib/' + args.brand + '/js/' + systemConfig.env[i] + '.js']
    		for (let k in userConfig[args.brand].scripts[j].dependencies) {
                rawFiles.push('./lib/' + args.brand + userConfig[args.brand].scripts[j].dependencies[k])
    		}

    		stream = src(rawFiles)
                .pipe( concat(userConfig[args.brand].scripts[j].name + '.js') )
                /*.pipe( uglify() )*/
                .pipe( dest('./compiled/custom/' + args.brand + '/' + systemConfig.env[i]))

            console.log('TASK: compiling ' + args.brand + ' :: ' + systemConfig.env[i] + ' ' + userConfig[args.brand].scripts[j].name + ' ...')
    	}
    }

    return stream
}
