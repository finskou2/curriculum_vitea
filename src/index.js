import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

var http = require('http')

http.createServer(function (request, response){
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.end("Hello World\n")
}).listen(process.env.PORT)