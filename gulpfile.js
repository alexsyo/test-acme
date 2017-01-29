'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const connect = require('gulp-connect');

gulp.task('vendorFONT', () => {
    gulp.src('bower_components/font-awesome/fonts/*')
    .pipe(gulp.dest('./vendor/fonts/'));
});

gulp.task('vendorCSS', () => {
    gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/font-awesome/css/font-awesome.min.css'
    ])
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./vendor/css/'));
});

gulp.task('vendorJS', () => {
    gulp.src([
        './bower_components/angular/angular.min.js',
        './bower_components/angular-resource/angular-resource.min.js',
        './bower_components/angular-route/angular-route.min.js',
        './bower_components/angular-messages/angular-messages.min.js',
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/bootstrap/dist/js/bootstrap.min.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./vendor/js/'));
});

gulp.task('connect', () => {
    connect.server({
        root: './',
        livereload: true
    });
});

gulp.task('vendor', ['vendorFONT', 'vendorCSS', 'vendorJS']);
gulp.task('default', ['vendor', 'connect']);