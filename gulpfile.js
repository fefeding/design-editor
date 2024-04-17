const gulp = require('gulp');
const concat = require('gulp-concat')
const ts = require('gulp-typescript');
const browserify = require('browserify');
const tsify = require('tsify');
const source = require('vinyl-source-stream');
const tsProject = ts.createProject('tsconfig.json');
const tsCJSProject = ts.createProject('tsconfig.cjs.json');


function createDtsTask(cb) {
    return tsProject.src()
    .pipe(tsProject())
    .dts.pipe(gulp.dest('dist'));
    cb();
};

function buildTSTask() {
    const pip = tsProject.src()
    .pipe(tsProject());

    pip.dts.pipe(gulp.dest('dist'));

    return pip.js.pipe(gulp.dest('dist'));
};

function buildESTask(cb) {
    const pip = tsCJSProject.src()
    .pipe(tsCJSProject());

    pip.dts.pipe(gulp.dest('dist'));

    return pip.js.pipe(concat('index.cjs.js'))
    .pipe(gulp.dest('dist'));
}

// 构建任务
const buildTask = gulp.series(buildTSTask, buildESTask);

function watch() {
    console.log('watch', tsProject.config.files);
    return gulp.watch(tsProject.config.files, { 
        ignoreInitial: false, // 第一次立即执行
        delay: 500  // 延时，不立马触 发
    }, function(cb) {
        console.log('更新执行构建');
        buildTask(cb);
    });
}


exports.default =  buildTask;
exports.watch = watch;