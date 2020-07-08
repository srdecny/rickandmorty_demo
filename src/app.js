import  http  from 'http'
import { displayCharacter } from './character.js'


const hostname = '0.0.0.0'
const port = 8080

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'text/html');

    switch (req.url) {
        case "/character":
            res.statusCode = 200
            res.write(await displayCharacter().catch(() => {
                res.statusCode = 500
                res.write("500 Internal Server Error - oh, man...")
            }))
            break
        default:
            res.statusCode = 404
            res.write("404 Page Not Found - oh, geez...")
            break
    }
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
  