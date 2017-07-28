var filterModule = require('./filter-module');

filterModule(process.argv[2], process.argv[3], function (err, filenames) {
    if (err) {
        console.error(err);
    } else {
        filenames.forEach(function (filename) {
            console.log(filename);
        });
    }
});