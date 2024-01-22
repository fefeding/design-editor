const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');


function createDtsTask(cb) {
    return tsProject.src()
    .pipe(tsProject())
    .dts.pipe(gulp.dest('dist'));
};

function buildTSTask(cb) {
    const pip = tsProject.src()
    .pipe(tsProject());

    pip.js.pipe(gulp.dest('dist'));
    pip.dts.pipe(gulp.dest('dist'));
    cb();
};

function watch(cb) {
    return gulp.watch(tsProject.config.files, { delay: 500 }, (e) => {
        console.log(e);
        buildTSTask(cb);
    });
}


exports.default =  buildTSTask;
exports.watch = watch;