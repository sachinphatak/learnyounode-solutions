var http = require('http');

http.get(process.argv[2], function (res) {
    res.setEncoding('utf8');
    var dataset = '';

    res.on('data', function (data) {
        dataset += data;
    });
    res.on('end', function () {
        console.log(dataset.length);
        console.log(dataset);
    });
});