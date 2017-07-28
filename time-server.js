var net = require('net');

net.createServer(function (socket) {
    var date = new Date();
    var year = String(date.getFullYear());
    var month = (date.getMonth() + 1)/10.0 > 1 ? String(date.getMonth()+ 1) : '0'+String(date.getMonth() + 1);
    var day = date.getDate()/10.0 > 1 ? String(date.getDate()) : '0'+String(date.getDate());
    var hours = date.getHours()/10.0 > 1 ? String(date.getHours()) : '0'+String(date.getHours());
    var minutes = date.getMinutes()/10.0 > 1 ? String(date.getMinutes()) : '0'+String(date.getMinutes());
    
    var formattedDate = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
    socket.end(formattedDate + '\n');
}).listen(process.argv[2]);