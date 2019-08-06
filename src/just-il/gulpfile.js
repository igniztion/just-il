// Include plugins
var gulp = require("gulp");
var sass = require("gulp-sass");
var smap = require("gulp-sourcemaps");
var fs = require("fs");
var path = require("path");
var runSequence = require("run-sequence");
var imagemin = require("gulp-imagemin");
var uglify = require("gulp-uglify");
var util = require("gulp-util");
var del = require("del");
var concat = require("gulp-concat");
var bower = require("gulp-bower");
var merge = require("merge-stream");

// Config
var config = {
    paths: {
        root: __dirname,
        webRoot: "./just-il.Web",
        contentFolder: "/Content",
        staticOutputRoot: "/Static",
        bootstrapFolder: "bower_components/bootstrap-sass/"
    },
    plugins: {
        uglify: {
            preserveComments: "license"
        }
    },
    taskTypes: {
        content: {
            name: "content",
            sass: {
                name: "content:sass",
                pattern: "/Sass/**/*.scss",
                outputFolderPattern: "/css",
                options: {
                    outputStyle: "compressed"
                }
            },
            scripts: {
                name: "content:scripts",
                pattern: "Scripts/**/*.js",
                outputFolderPattern: "/js",
                outputFile: "main.js"
            },
            images: {
                name: "content:images",
                pattern: "/Images/**/*.{jpg,png,svg,ico}",
                outputFolderPattern: "/img"
            },
            fonts: {
                name: "content:fonts",
                pattern: "/Fonts/**/*.{eot,svg,ttf,woff}",
                outputFolderPattern: "/fonts",
                cssOutputFolderPattern: "/css"
            }
        },
        copy: {
            name: "copy",
            vendorassets: {
                name: "copy:vendorassets",
                files: [
                    "bower_components/jquery/dist/jquery.min.js",
                    "bower_components/slick-carousel/slick/slick.min.js",
                    "bower_components/slick-lightbox/dist/slick-lightbox.min.js",
                    "bower_components/jquery-lazy/jquery.lazy.min.js",
                    "bower_components/imagesloaded/imagesloaded.pkgd.min.js",
                    "bower_components/masonry/dist/masonry.pkgd.min.js"
                ],
                outputFile: "bundle.js",
                outputFolderPattern: "/js/vendor"
            },
            bootstrap: {
                name: "copy:bootstrap",
                files: [
                    "bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js"
                ],
                outputFile: "bootstrap.js",
                outputFolderPattern: "/js/bootstrap"
            },
            bootstrapfonts: {
                name: "copy:bootstrapfonts",
                files: [
                    "bower_components/bootstrap-sass/assets/fonts/bootstrap/*.{eot,svg,ttf,woff,woff2}"
                ],
                outputFolderPattern: "/fonts/bootstrap"
            },
            slickimages: {
                name: "copy:slickimages",
                files: [
                    "bower_components/slick-carousel/slick/*.gif"
                ],
                outputFolderPattern: "/css/slick"
            },
            slickfonts: {
                name: "copy:slickfonts",
                files: [
                    "bower_components/slick-carousel/slick/fonts/*.{eot,svg,ttf,woff,woff2}"
                ],
                outputFolderPattern: "/css/slick/fonts"
            }
        }
    }
}

// Task variables
var contentPath = path.join(config.paths.webRoot, config.paths.contentFolder);
var contentOutputPath = path.join(config.paths.webRoot, config.paths.staticOutputRoot);
var contents = getFolders(contentPath);
var runTimestamp = Math.round(Date.now() / 1000);


// Tasks
gulp.task(config.taskTypes.content.sass.name, function () {
    var task = config.taskTypes.content;
    var output = path.join(contentOutputPath, task.sass.outputFolderPattern);
    var srcpath = path.join(contentPath, task.sass.pattern);
    return gulp.src(srcpath)
        .pipe(smap.init())
        .pipe(sass(task.sass.options).on("error", sass.logError))
        .pipe(smap.write("./"))
        .pipe(gulp.dest(output));
});

gulp.task(config.taskTypes.content.scripts.name, function () {
    var task = config.taskTypes.content;
    var output = path.join(contentOutputPath, task.scripts.outputFolderPattern);
    var srcpath = path.join(contentPath, task.scripts.pattern);
    return gulp.src(srcpath)
        .pipe(concat(task.scripts.outputFile))
        .pipe(smap.init({ loadMaps: true }))
        .pipe(uglify().on("error", util.log))
        .pipe(smap.write("./maps"))
        .pipe(gulp.dest(output));
});

gulp.task(config.taskTypes.content.images.name, function () {
    var task = config.taskTypes.content;
    var output = path.join(contentOutputPath, task.images.outputFolderPattern);
    var srcpath = path.join(contentPath, task.images.pattern);
    return gulp.src(srcpath)
        .pipe(imagemin())
        .pipe(gulp.dest(output));
});

gulp.task(config.taskTypes.content.fonts.name, function () {
    var task = config.taskTypes.content.fonts;
    var output = path.join(contentOutputPath, task.outputFolderPattern);
    var cssOutput = path.join(contentOutputPath, task.cssOutputFolderPattern);
    var fontPath = config.paths.staticOutputRoot + task.outputFolderPattern;
    var srcpath = path.join(contentPath, task.pattern);
    return gulp.src(srcpath)
        .pipe(gulp.dest(output));
});

gulp.task(config.taskTypes.copy.vendorassets.name, function () {
    var task = config.taskTypes.copy.vendorassets;
    var output = path.join(config.paths.webRoot, config.paths.staticOutputRoot, task.outputFolderPattern);
    return gulp.src(task.files)
        .pipe(concat(task.outputFile))
        .pipe(smap.init({ loadMaps: true }))
        .pipe(uglify().on("error", util.log))
        .pipe(smap.write("./maps"))
        .pipe(gulp.dest(output));
});

gulp.task(config.taskTypes.copy.bootstrap.name, function () {
    var task = config.taskTypes.copy.bootstrap;
    var output = path.join(config.paths.webRoot, config.paths.staticOutputRoot, task.outputFolderPattern);
    return gulp.src(task.files)
        .pipe(concat(task.outputFile))
        .pipe(smap.init({ loadMaps: true }))
        .pipe(smap.write("./maps"))
        .pipe(gulp.dest(output));
});

gulp.task(config.taskTypes.copy.slickimages.name, function () {
    var task = config.taskTypes.copy.slickimages;
    var output = path.join(config.paths.webRoot, config.paths.staticOutputRoot, task.outputFolderPattern);
    return gulp.src(task.files)
        .pipe(gulp.dest(output));
});

gulp.task(config.taskTypes.copy.slickfonts.name, function () {
    var task = config.taskTypes.copy.slickfonts;
    var output = path.join(config.paths.webRoot, config.paths.staticOutputRoot, task.outputFolderPattern);
    return gulp.src(task.files)
        .pipe(gulp.dest(output));
});

gulp.task(config.taskTypes.copy.bootstrapfonts.name, function () {
    var task = config.taskTypes.copy.bootstrapfonts;
    var output = path.join(contentOutputPath, task.outputFolderPattern);
    return gulp.src(task.files)
        .pipe(gulp.dest(output));
});

gulp.task("clean", function() {
    var task = config.taskTypes.content;
    var css = path.join(contentOutputPath, task.sass.outputFolderPattern, "/**/*");
    var images = path.join(contentOutputPath, task.images.outputFolderPattern, "/**/*");
    var scripts = path.join(contentOutputPath, task.scripts.outputFolderPattern, "/**/*");
    var fonts = path.join(contentOutputPath, task.fonts.outputFolderPattern, "/**/*");
    return del([css, images, scripts, fonts]);
});

gulp.task("copy", ["bower"], function (callback) {
    var task = config.taskTypes.copy;
    return runSequence(task.vendorassets.name, task.bootstrap.name, task.bootstrapfonts.name, task.slickimages.name, task.slickfonts.name, callback);
});

gulp.task("build", function (callback) {
    var task = config.taskTypes.content;
    return runSequence("clean", "copy", task.sass.name, task.scripts.name, task.images.name, task.fonts.name, callback);
});

gulp.task("bower", function () {
    return bower();
});

gulp.task('watch:sass', function () {
    var srcPath = path.join(contentPath, config.taskTypes.content.sass.pattern);
    gulp.watch(srcPath, [config.taskTypes.content.sass.name]);
});

gulp.task('watch:scripts', function () {
    var srcPath = path.join(contentPath, config.taskTypes.content.scripts.pattern);
    gulp.watch(srcPath, [config.taskTypes.content.scripts.name]);
});

gulp.task('watch', function () {
    return runSequence("watch:sass", "watch:scripts");
});

// Methods
function getFolders(dir) {
    return fs.readdirSync(dir).filter(function (file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
    });
};
