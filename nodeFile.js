import * as fs from 'fs';
import express from 'express';

const app = express()
const port = 8000
app.use(express.static('public'))

fs.readFile('index.html', function (err, html) {
    if (err) {
        throw err; 
    }       

    app.get('/', (req, response) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        response.setHeader('Access-Control-Allow-Headers', '*');
        response.writeHead(200);
        response.write(html);  
        response.end();
    })
});

app.listen(port, () => {})