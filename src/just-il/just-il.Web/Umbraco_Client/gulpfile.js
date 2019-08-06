'use strict';
var gulp = require("gulp"),
    path = require("path"),
    $ = require("gulp-load-plugins")({ pattern: ["*"] });
var fs = require("fs");
var fse = require('fs-extra');

var paths = {
    lib: {
        root: "./UmbStartPoint/Static/Scripts/",
        node_root: "./node_modules/"
    },
    effera: {
    	src: "./UmbStartPoint/Static/Scripts/",
    	dest: "./UmbStartPoint/scripts/"
    },
    sass: {
    	root: path.join(__dirname, "./UmbStartPoint/Static/sass"),
        bootstrap: {
        	root: path.join("./UmbStartPoint/Static/sass", "bootstrap"),
        	dest_root: path.join(__dirname, "./UmbStartPoint/css/bootstrap")
        },
        dest_root: path.join(__dirname, "./UmbStartPoint/css")
    }
};

var settings = {
    effera: {
        lib: [
            path.join(paths.lib.root, "lodash/lodash.custom.js"),
        ],
        output: {
            lib_js: "effera-bi_lib.js",
            lib_min_js: "effera-com_lib.min.js",
            js: "effera.js",
            min_js: "effera.min.js"
        },
		scripts: [
			path.join(paths.effera.src, "**/*.js")
		]
    },
    sass: {
        watch: path.join(paths.sass.root, "**/*.scss"),
        main: {
            src: [
                path.join(paths.sass.root, "main.scss")
            ],
            css: { debug: "effera.css", release: "effera.min.css" }
        },
        bootstrap: {
            node_modules_src: [path.join(paths.lib.node_root, "bootstrap-sass/assets/**/*.*")],
            bootstrap_scss: path.join(paths.lib.node_root, "bootstrap-sass/assets/stylesheets/_bootstrap.scss"),
            variables_node: path.join(paths.lib.node_root, "bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss"),
            variables_src: path.join(paths.sass.bootstrap.root, "stylesheets/bootstrap/_variables.scss"),
            fonts_src: [path.join(paths.sass.bootstrap.root, 'fonts/bootstrap/**/*.*')],
            js_src: [path.join(paths.sass.bootstrap.root, 'javascripts/**/*.js')],
            src: [path.join(paths.sass.bootstrap.root, "stylesheets/bootstrap.scss")],
            css: {debug: "bootstrap.css", release:"bootstrap.min.css"}
        }
    }
};
//------- javscript -----------

//------- css -----------
//delete output files
function getFilesWithFullPathArray(base_path,css_files) {
    var main_css = [];
    for (var property in css_files) {
        main_css.push(path.join(base_path, css_files[property]));
    }
    return main_css;
}

gulp.task('install', function () {
    fs.stat(settings.sass.bootstrap.src[0], function (err, stat) {
        if (err) {
            var bootstrap_sass = settings.sass.bootstrap.node_modules_src;
            bootstrap_sass.push("!" + settings.sass.bootstrap.bootstrap_scss);
            bootstrap_sass.push("!" + settings.sass.bootstrap.variables_node);
            gulp.src(bootstrap_sass)
                .pipe(gulp.dest(paths.sass.bootstrap.root));

            fse.copySync(settings.sass.bootstrap.bootstrap_scss, settings.sass.bootstrap.src[0]);
            fs.stat(settings.sass.bootstrap.variables_src, function (err, stat) {
                if (err) {
                    fse.copySync(settings.sass.bootstrap.variables_node, settings.sass.bootstrap.variables_src);
                }
            });
        }
    });
});

gulp.task('bootstrap_css:clean', function () {
    var main_css = [paths.sass.bootstrap.dest_root, path.join(paths.sass.dest_root, "fonts")];
    $.del.sync(main_css);
});

gulp.task('bootstrap_css', ['bootstrap_css:clean'], function () {
    var styleDest = paths.sass.bootstrap.dest_root;
    gulp.src(settings.sass.bootstrap.src)
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(styleDest));

    gulp.src(settings.sass.bootstrap.src)
        .pipe($.sass({ outputStyle: 'compressed' }).on('error', $.sass.logError))
        .pipe($.concat(settings.sass.bootstrap.css.release))
        .pipe(gulp.dest(styleDest));

    var fonts = settings.sass.bootstrap.fonts_src;
    console.log(fonts[0]);
    gulp.src(fonts)
        .pipe(gulp.dest(path.join(paths.sass.dest_root, "fonts/bootstrap")));
    gulp.src(settings.sass.bootstrap.js_src)
        .pipe(gulp.dest(path.join(paths.sass.dest_root, "js")));
});

gulp.task('css:clean', function () {
    var main_css = getFilesWithFullPathArray(paths.sass.dest_root, settings.sass.main.css);
    $.del.sync(main_css);
});
//combine and minify
gulp.task('css', ['css:clean'], function () {
    gulp.src(settings.sass.main.src)
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(paths.sass.dest_root));

    gulp.src(settings.sass.main.src)
    .pipe($.sass({ outputStyle: 'compressed' }).on('error', $.sass.logError))
    .pipe($.concat(settings.sass.main.css.release))
    .pipe(gulp.dest(paths.sass.dest_root));
});

gulp.task('lib:clean', function () {
    $.del.sync([
    path.join(paths.lib.root, settings.effera.output.lib_js),
    path.join(paths.lib.root, "lib.min.js.map"),
    path.join(paths.lib.root, settings.effera.output.min_js)
    ]);
});

//combine and minify
gulp.task('lib', ['lib:clean'], function () {
    gulp.src(settings.effera.lib)
      .pipe($.concat(settings.effera.output.lib_js))
      .pipe(gulp.dest(paths.lib.root));

    var jsmin = gulp.src(settings.effera.lib)
      .pipe($.uglify({ mangle: false }))
      .pipe($.concat(settings.effera.output.lib_min_js))
      .pipe(gulp.dest(paths.lib.root));
    return jsmin;
});

//delete output files
gulp.task('scripts_effera:clean', function () {
    $.del.sync([
    path.join(paths.effera.dest, settings.effera.output.js),
    path.join(paths.effera.dest, "min.js.map"),
    path.join(paths.effera.dest, settings.effera.output.min_js)
    ]);
});

//combine and minify
gulp.task('scripts_effera', ['scripts_effera:clean'], function () {
    gulp.src(settings.effera.scripts)
      .pipe($.concat(settings.effera.output.js))
      .pipe(gulp.dest(paths.effera.dest));

    var jsmin = gulp.src(settings.effera.scripts)
      .pipe($.uglify({ mangle: false }))
      .pipe($.concat(settings.effera.output.min_js))
      .pipe(gulp.dest(paths.effera.dest));
    return jsmin;
});


gulp.task('watch', function () {
    gulp.watch(settings.effera.lib, ['lib']);
    gulp.watch(settings.effera.scripts, ['scripts_effera']);
    gulp.watch(settings.sass.watch, ['css']);
    gulp.watch([settings.sass.bootstrap.variables_src], ['bootstrap_css']);
});


gulp.task('build', ['lib', 'scripts_effera', 'css']);
