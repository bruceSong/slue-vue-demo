const slue = require('slue');
const browerSync = require('browser-sync').create();

slue.task('server', function() {
    browerSync.init({
        server: "./build"
    });
});