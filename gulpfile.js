
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
	sass 			= require('gulp-sass'),
	uglify			= require('gulp-uglify'),
    autoPrefixer 	= require('gulp-autoprefixer');


// ==============================================================
// Config
// ==============================================================

var input = {
	sass: './src/styles/*.{scss,sass}',
	js: './src/javascript/*.js'
}

var output = {
	js: './js/',
	css: './css/', 
	img: './img/' 
}

var sassOption = {outputStyle: 'compressed'}
// ==============================================================
// Sass
// ==============================================================

gulp.task('sass', function () {
	return gulp
		.src (input.sass)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoPrefixer())
		.pipe(gulp.dest(output.css)); 
}); 

// ==============================================================
// Javascript
// ==============================================================

gulp.task('javascript', function () {
	return gulp
		.src (input.js)
		.pipe(uglify())
		.pipe(gulp.dest(output.js)); 
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

gulp.task('default', ['sass', 'javascript']);