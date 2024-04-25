/**
 * Load the plugins.
 */
const fs = require("fs")
const zip = require('gulp-zip')
const shell = require('gulp-shell')
const jsonEditor = require('gulp-json-editor')
const { src, dest, series } = require('gulp')

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
 * GULP TASK: utilities.start.
 */
exports.start = series(
    generateManifest,
    createPackage
)
exports.enableDevelopmentMode = series(enableDevelopmentMode)


/**
 * TASK: generateManifest.
 */
function generateManifest () {
    let stream = ''
    for (let i in systemConfig.env) {
        stream = src('./lib/' + args.brand + '/settings/manifest.json')
            .pipe(
                jsonEditor(function (json) {
                    json.name = json.name + ' v- ' + args.var
                    json.version = args.var.toLowerCase().replace(/[^0-9.,]+/g, "")
                    return json
                }, {
                    indent_char: '\t',
                    indent_size: 4
                })
            )
            .pipe( dest('./compiled/' + args.brand + '/' + systemConfig.env[i] + '/') )

        console.log('TASK: creating manifest file for ' + args.brand + ' :: ' + systemConfig.env[i] + ' ...')
    }

    return stream
}


/**
 * TASK: createPackage.
 */
function createPackage () {
    let stream = ''
    for (let i in systemConfig.env) {
        stream = src('./compiled/' + args.brand + '/' + systemConfig.env[i] + '/**/*')
            .pipe( zip(userConfig[args.brand].theme) )
            .pipe( dest('./themes/' + args.brand + '/' + systemConfig.env[i] + '/') )

            console.log('TASK: creating theme package for ' + args.brand + ' :: ' + systemConfig.env[i] + ' ...')
    }

    return stream
}


/**
 * TASK: enableDevelopmentMode.
 */
function enableDevelopmentMode () {
    let stream = ''
    stream = src('./gulpfile.js')

    if (fs.existsSync(process.env.HOME + '/snacks/guidekit/developmentMode/enable')) {
        stream.pipe( shell(['. ' + process.env.HOME + '/snacks/guidekit/developmentMode/enable']) )
    }

    return stream
}