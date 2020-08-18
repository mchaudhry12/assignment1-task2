var http = require('http'),
fs = require('fs');

var url = require('url');

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        

        var q = url.parse(request.url, true).query;
        var txt = q.bname + " " + q.bemail + " " + q.bvalue;
        console.log("received:" +txt);

        if(q.items=="true")
        {

        }
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8080);
});