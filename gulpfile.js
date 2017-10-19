
/*
 * ==========================================================
 * Gulpfile.js 
 * Task runner for 'sushikito.fr'
 * @author: Andres Hernandez <hernandez.andres.d@gmail.com>
 * @date: Mar 2017
 * ==========================================================
 */

'use strict';

// ==============================================================
// Dependencies 
// ==============================================================

var gulp 			= require('gulp'),
	gulpif  		= require('gulp-if'),
	sass 			= require('gulp-sass'),
	uglify			= require('gulp-uglify'),
	htmlmin 		= require('gulp-htmlmin'),
	imagemin		= require('gulp-imagemin'),
    sourceMaps 		= require('gulp-sourcemaps'),
    autoPrefixer 	= require('gulp-autoprefixer');

var del 			= require('del'),
	panini 			= require('panini'),
	args    		= require('yargs').argv, 
	webpack			= require('webpack-stream'); 
	
// ==============================================================
// Config
// ==============================================================

var isProduction = args.env === 'prod';

var inputRoot = './src'; 

var input = {
	js: 	inputRoot + '/**/*.js',
	html: 	inputRoot + '/html/pages/*.html',
	sass: 	inputRoot + '/**/*.{scss,sass}',	
	img: 	inputRoot + '/**/*.{png,jpg,jpeg,svg,gif,ico}',
	copy: 	inputRoot + '/**/*.{otf,ttf,eot,woff,mp4}'
}

var output = {
	build: 	'./build'
}

var sassOptions = {outputStyle: 'compressed'}

// ==============================================================
// Clear Build
// ==============================================================

gulp.task('clear', function() {
	del(output.build);
}); 

// ==============================================================
// Sass
// ==============================================================

gulp.task('sass', function () {
	return gulp
		.src (input.sass)
		.pipe(
			gulpif(!isProduction, sourceMaps.init())
		)
		.pipe(
			gulpif(!isProduction, sourceMaps.write())
		)
		.pipe(
			sass(
				gulpif(isProduction, sassOptions)
			).on('error', sass.logError)
		)
		.pipe(autoPrefixer())
		.pipe(gulp.dest(output.build)); 
}); 

// ==============================================================
// Javascript
// ==============================================================

gulp.task('js', function () {
	return gulp
		.src (input.js)
		.pipe(
			webpack({
				entry: {
					main: './src/js/main.js',
					menu: './src/js/Menu.js'
				},
				module: {
				  	loaders: [
				    	{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] }
				  	]
				},
				output: {
			        filename: '[name].js'
			    }
			})
		)
		.pipe(
			gulpif(isProduction, uglify())
		)
		.pipe(gulp.dest(output.build + '/js/')); 
}); 

// ======================================================================
// Images
// ======================================================================

gulp.task('images', function(){
	return gulp
		.src(input.img)
		.pipe(
			gulpif(isProduction, imagemin())
		)
		.pipe(gulp.dest(output.build));
});

// ======================================================================
// HTML
// ======================================================================
	gulp.task('panini', function() {
		return gulp
			.src(input.html)
	    	.pipe( 
	    		panini({
		    		root: inputRoot + '/html/pages',
			    	layouts: inputRoot + '/html/layouts',
			    	partials: inputRoot + '/html/partials', 
			    	data: inputRoot + '/html/data' 
		    	})
		    )
		    .pipe(
		    	gulpif(isProduction, htmlmin({collapseWhitespace: true}))
		    )
	    	.pipe(gulp.dest(output.build));
	});

// ======================================================================
// Fonts
// ======================================================================

gulp.task('copy', function(){
	return gulp
		.src(input.copy)
		.pipe(gulp.dest(output.build));
});

// ======================================================================
// Fonts
// ======================================================================

gulp.task('vendor', function(){
	return gulp
		.src('./vendor/**')
		.pipe(gulp.dest(output.build));
});

// ==============================================================
// Watch
// ==============================================================

gulp.task('watch', function() {
	gulp.watch(input.sass, ['sass']);
	gulp.watch(input.js, ['js']);
	gulp.watch(inputRoot + '/html/**/*.html', ['panini']);
	gulp.watch(inputRoot + '/img/**', ['images']);
});

// ==============================================================
// Default
// ==============================================================

gulp.task('default', ['sass', 'js', 'images', 'panini', 'copy', 'vendor']);

