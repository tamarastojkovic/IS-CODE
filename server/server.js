const http = require('http')
const app = require('./app')

const port = 3002;
const server = http.createServer(app);
server.listen(port, function(){
    console.log(`Server pokrenut na portu ${port}`);
})