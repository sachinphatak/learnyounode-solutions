var http = require('http');

var totalNumberOfCalls = 3;
var streamCompleteCount = 0;
var dataset = [];

var callbackGenerator = function (positionOfCall) {
    return function (res) {
        res.setEncoding('utf8');
        dataset[positionOfCall] = ''

        res.on('data', function (data) {
            dataset[positionOfCall] += data;
        });
        res.on('end', function () {
            ++streamCompleteCount;
            if (streamCompleteCount === totalNumberOfCalls) {
                dataset.forEach(function (line) {
                    console.log(line);
                });
            }
        });
    }
}

for (var i = 0; i < totalNumberOfCalls; ++i) {
    http.get(process.argv[i + 2], callbackGenerator(i))
}