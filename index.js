const http = require('http');
const fs = require('fs');

const server = http.createServer((rep, res) => {
   res.setHeader('Content-Type', 'text/html');


   let path = './vieuws/';
    switch(rep.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break
        case '/contact':
            path += 'concatct.html';  
            res.statusCode = 200; 
            break
        default:
            path += '404.html'; 
            res.statusCode = 404;
            break
    }

    fs.readFile(path, (err, data) =>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })
   
});


server.listen(8080, 'localhost', () => {
    console.log('listening for a requests on port 8080')
})