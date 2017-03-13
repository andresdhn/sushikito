
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
	imagemin		= require('gulp-imagemin'),
    sourceMaps 		= require('gulp-sourcemaps'),
    autoPrefixer 	= require('gulp-autoprefixer');


// ==============================================================
// Config
// ==============================================================

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

var sassOption = {outputStyle: 'compressed'}

// ==============================================================
// Sass
// ==============================================================

gulp.task('sass', function () {
	return gulp
		.src (input.sass)
		.pipe(sourceMaps.init())
		.pipe(sourceMaps.write())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoPrefixer())
		.pipe(gulp.dest(output.build)); 
}); 

// ==============================================================
// Javascript
// ==============================================================

gulp.task('javascript', function () {
	return gulp
		.src (input.js)
		.pipe(uglify())
		.pipe(gulp.dest(output.build)); 
}); 

// ======================================================================
// Images
// ======================================================================

gulp.task('images', function(){
	return gulp
		.src(input.img)
		.pipe(imagemin())
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