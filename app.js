var express = require('express');

var app = express();

var port = process.env.PORT || 8080;

app.listen(port,function(){
    console.log("Server up and running on port %s ", port);
    console.log("Catch the action pasting http://localhost:%s ", port);
});

app.get('/',function(request,response){
   response.sendfile(__dirname + '/index.html');
})

