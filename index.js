const http = require('http');
const kue = require('kue');
const hostname = '127.0.0.1';
const port = 3050;


kue.createQueue({ redis: 'redis://127.0.0.1:6379/' })
kue.app.listen(port);
console.log("server started at "+port);

