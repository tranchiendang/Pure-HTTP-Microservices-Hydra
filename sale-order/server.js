const connect = require("connect");
const http = require("http");
const bodyParser = require("body-parser");

const app = connect();
app.use(bodyParser.urlencoded({'extended': false}));

app.use(function(req, res, next){
  serverHandler(req, res);
  next();
});

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json'
};

function serverHandler(req, res){
  sendResponse(res, "bla bla bla!!!");
};

function sendResponse(res, content){
  let contentType = mimeTypes['.json'];

  res.writeHead(200, {'Content-Type': contentType});
  res.write(JSON.stringify(content));
  res.end();
}

const httpServer = http.createServer(app).listen(3000);
