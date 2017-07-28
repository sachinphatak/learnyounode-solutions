var fs = require('fs');

fs.readdir(process.argv[2], function(err, filenames) {
    if (err) {
        console.error(err);
    } else {
        for (i in filenames) {
            var split = filenames[i].split('.');
            if ((split[split.length - 1] === process.argv[3]) && (split.length > 1 && split[0] !== '')) {
                console.log(filenames[i]);
            }
        }
    }
});