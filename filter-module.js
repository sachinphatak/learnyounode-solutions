var fs = require('fs');

module.exports = function (dirName, extension, callback) {
    fs.readdir(dirName, function (err, filenames) {
        if (err) {
            callback(err);
        } else {
            var filteredFilenames = filenames.filter(function (filename) {
                var split = filename.split('.');
                return (split[split.length - 1] === extension) && (split.length > 1 && split[0] !== '');
            });
            callback(null, filteredFilenames);
        }
    })
}