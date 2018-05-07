import http from 'http';
const httpServer = http.createServer(serverHandler);

function serverHandler(req, res){
  sendResponse(res, {"bla bla bla!!!"});
};

function sendResponse(res, content){
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(content));
  res.end();
}

httpServer.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});
