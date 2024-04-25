/**
 * Load the plugins.
 */
const clean = require('gulp-clean')
const uglify = require('gulp-uglify')
const modifyFile = require('gulp-modify-file')
const { src, dest, series, parallel }  = require('gulp')


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
 * GULP TASK: copy.start.
 */
exports.start = series(
    parallel(
        copyFrameworks,
        copyAssets,
        copyComponents,
        copyTemplates,
        copyThumbnail,
        copyImages,
        copySyncTracker,
        copyDefaultStyle,
        copyDefaultScript
    )
)


/**
 * TASK: cleanTheme.
 */
function cleanTheme () {
    let stream = src('./compiled/' + args.brand, {read: false})
        .pipe( clean({ force: true }) )

    return stream
}


/**
 * TASK: copyFrameworks.
 */
function copyFrameworks () {
    let stream = ''
    for (let i in systemConfig.env) {
        stream = src('./compiled/framework/*')
        stream.pipe( dest('./compiled/' + args.brand + '/' + systemConfig.env[i] + '/assets/') )

        console.log('TASK: coping framework files to ' + args.brand + ' :: ' + systemConfig.env[i] + ' directory ...')
    }

    return stream
}


/**
 * TASK: copyAssets.
 */
function copyAssets () {
    let stream = ''
    for (let i in systemConfig.env) {
        stream = src('./compiled/custom/' + args.brand + '/' + systemConfig.env[i] + '/*')
            .pipe( dest('./compiled/' + args.brand + '/' + systemConfig.env[i] + '/assets/') )

        console.log('TASK: coping asset files to ' + args.brand + ' :: ' + systemConfig.env[i] + ' directory ...')
    }

    return stream
}


/**
 * TASK: copyComponents.
 */
function copyComponents () {
    let stream = ''
    for (let i in systemConfig.env) {
        stream = src('./lib/' + args.brand + '/settings/assets/*')
            .pipe( dest('./compiled/' + args.brand + '/' + systemConfig.env[i] + '/assets/') )

        console.log('TASK: coping component files to ' + args.brand + ' :: ' + systemConfig.env[i] + ' directory ...')
    }

    return stream
}


/**
 * TASK: copyTemplates.
 */
function copyTemplates () {
    let stream = ''
    for (let i in systemConfig.env) {
    	stream = src('./lib/' + args.brand + '/templates/' + systemConfig.env[i] + '/*')
    		.pipe( dest('./compiled/' + args.brand + '/' + systemConfig.env[i] + '/templates/') )

        console.log('TASK: coping template files to ' + args.brand + ' :: ' + systemConfig.env[i] + ' directory ...')
    }

    return stream
}


/**
 * TASK: copyThumbnail.
 */
function copyThumbnail () {
    let stream = ''
    for (let i in systemConfig.env) {
        stream = src('./lib/' + args.brand + '/settings/thumbnail.png')
            .pipe( dest('./compiled/' + args.brand + '/' + systemConfig.env[i] + '/') )

        console.log('TASK: coping thumbnail to ' + args.brand + ' :: ' + systemConfig.env[i] + ' directory ...')
    }

    return stream
}


/**
 * TASK: copyImages.
 */
function copyImages () {
    let stream = ''
    for (let i in systemConfig.env) {
        stream = src('./lib/' + args.brand + '/settings/images/*')
            .pipe( dest('./compiled/' + args.brand + '/' + systemConfig.env[i] + '/settings/') )

        console.log('TASK: coping images to ' + args.brand + ' :: ' + systemConfig.env[i] + ' directory ...')
    }

    return stream
}


/**
 * TASK: copySyncTracker.
 */
function copySyncTracker () {
    let stream = ''
    stream = src('./lib/synctracker/reload.js')
        /*.pipe( uglify() )*/
        .pipe( dest('./compiled/') )

    console.log('TASK: coping browser sync tracker ...')

    return stream
}


/**
 * TASK: copyDefaultStyle.
 */
function copyDefaultStyle () {
    let stream = ''
    for (let i in systemConfig.env) {
        stream = src('./lib/' + args.brand + '/settings/default/style.css')
            .pipe( dest('./compiled/' + args.brand + '/' + systemConfig.env[i] + '/') )

        console.log('TASK: coping default style to ' + args.brand + ' :: ' + systemConfig.env[i] + ' directory ...')
    }

    return stream
}


/**
 * TASK: copyDefaultScript.
 */
function copyDefaultScript () {
    let stream = ''
    for (let i in systemConfig.env) {
        stream = src('./lib/' + args.brand + '/settings/default/script.js')

        .pipe(
            modifyFile(function (content) {
                let output = []
                output.push('\n\n')
                output.push('if (getQueryParam(\'debug\') == \'true\') {')
                    output.push('console.log(\'HC guide release date :: ' + Date() + '\')')
                output.push('}')

                content = content + output.join('')

                console.log('TASK: adding release date to ' + args.brand + ' :: ' + systemConfig.env[i] + ' default script ...')

                return content
            })
        )

        .pipe( dest('./compiled/' + args.brand + '/' + systemConfig.env[i] + '/') )

        console.log('TASK: coping default script to ' + args.brand + ' :: ' + systemConfig.env[i] + ' directory ...')
    }

    return stream
}
