const http = require('http');

const requestListener =(req, res) => {
   // console.log(req);// return whole req obj
    //console.dir(req,{depth:0}); // print first level of object
    //console.log(req.url);
    console.dir(res,{depth:0});
    res.end('Hello Node\n');
};

const server = http.createServer();
server.on('request',requestListener);

server.listen(4242, () => {
  console.log('Server is running...');
});
