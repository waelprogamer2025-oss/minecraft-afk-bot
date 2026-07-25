const http = require('http');

const port = process.env.PORT || 10000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Minecraft AFK Bot is running!');
}).listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

require('./bot');
