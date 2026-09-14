const http = require('http');
const fs = require('fs');
const path = require('path');

let PORT = process.env.PORT || 5500;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

function resolveStaticFile(urlPath) {

  const relPath = path.normalize(urlPath).replace(/^(\.\.[\/\\])+/, '').replace(/^[/\\]+/, '');
  if (!relPath) return null;

  if (relPath === 'public' || relPath === path.join('public', 'index.html')) {
    return path.join(__dirname, 'public', 'index.html');
  }

  const publicPath = path.join(__dirname, 'public', relPath);
  if (fs.existsSync(publicPath) && fs.statSync(publicPath).isFile()) {
    return publicPath;
  }

  if (relPath.startsWith('src' + path.sep) || relPath.startsWith('src/')) {
    const srcPath = path.join(__dirname, relPath);
    if (fs.existsSync(srcPath) && fs.statSync(srcPath).isFile()) {
      return srcPath;
    }
  }

  if (relPath === 'favicon.png' || relPath === 'favicon.ico') {
    const fav = path.join(__dirname, 'public', 'assets', 'favicon.png');
    if (fs.existsSync(fav)) return fav;
  }

  return null;
}

const server = http.createServer((req, res) => {
  const urlPath = decodeURI(req.url.split('?')[0]);

  const fullPath = path.join(__dirname, urlPath);
  if (!fullPath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('403 Accès interdit');
  }

  const file = resolveStaticFile(urlPath);
  if (file) {
    const ext = path.extname(file).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    return fs.createReadStream(file).pipe(res);
  }


  if (path.extname(urlPath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('404 Ressource introuvable');
  }

  const indexPath = path.join(__dirname, 'public', 'index.html');
  if (fs.existsSync(indexPath)) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return fs.createReadStream(indexPath).pipe(res);
  }

  res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Erreur: public/index.html est introuvable');
});

server.listen(PORT, () => {
  console.log(`Serveur SmartBank prêt sur http://localhost:${PORT}`);
});
