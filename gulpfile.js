process.env.DISABLE_NOTIFIER = true;


/**
 * Load the plugins.
 */
const { series, parallel, watch }  = require('gulp')


/**
 * Load the guide theme dev kit tasks.
 */
const framework = require('./tasks/framework.js')
const assets = require('./tasks/assets.js')
const copy = require('./tasks/copy.js')
const utilities = require('./tasks/utilities.js')


/**
 * Load the guide theme dev kit configurations.
 */
const userConfig = require('./config.json')
const systemConfig = require('./tasks/config.json')


/**
 * Get the task arguments.
 */
const args = require('yargs').argv


/**
 * GULP TASK: build.
 * i.e. gulp build --brand helpcenter --ver 1.0.1
 */
exports.build = series(
	utilities.enableDevelopmentMode,
	parallel(
		framework.compile,
		assets.compile
	),
	copy.start,
	utilities.start
)


/**
 * GULP TASK: watch.
 * i.e. gulp watch --brand helpcenter --ver 1.0.1
 */
exports.watch = function () {
	watch(systemConfig.watch.styles, series(
		parallel(
			framework.compile,
			assets.compile
		),
		copy.start
	))
	watch(systemConfig.watch.scripts, series(
		parallel(
			framework.compile,
			assets.compile
		),
		copy.start
	))
}
