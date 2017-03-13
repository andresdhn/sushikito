
/*
 * ==========================================================
 * Gulpfile.js 
 * Task runner for 'test-libraries'
 * @author: Andres Hernandez <hernandez.andres.d@gmail.com>
 * @date: Jan 2017
 * @copy: MIT
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
	imagemin		= require('gulp-imagemin'),
    sourceMaps 		= require('gulp-sourcemaps'),
    autoPrefixer 	= require('gulp-autoprefixer');

var args    		= require('yargs').argv; 

// ==============================================================
// Config
// ==============================================================

var isProduction = args.env === 'prod';

var inputRoot = './src'; 

var input = {
	js: 	inputRoot + '/**/*.js',
	html: 	inputRoot + '/**/*.html',
	sass: 	inputRoot + '/**/*.{scss,sass}',	
	img: 	inputRoot + '/**/*.{png,jpg,jpeg,svg,gif}'
}

var output = {
	build: 	'./build'
}

var sassOptions = {outputStyle: 'compressed'}

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

gulp.task('javascript', function () {
	return gulp
		.src (input.js)
		.pipe(
			gulpif(isProduction, uglify())
		)
		.pipe(gulp.dest(output.build)); 
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

// ==============================================================
// Watch
// ==============================================================

gulp.task('watch', function() {
	gulp.watch(input.sass, ['sass']);
	gulp.watch(input.js, ['javascript']);
});

// ==============================================================
// Default
// ==============================================================

gulp.task('default', ['sass', 'javascript', 'images']);