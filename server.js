const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express()

  // server.get('*', (req, res) => {
  //   return handle(req, res)
  // })

  server.get("/robots.txt", (req, res) => {
    res.sendFile(path.join(__dirname, "./static/robots.txt"), function(err) {
      if (err) {
        res.status(err.status).end();
      }
    });
  });

  server.get('/', (req, res) => {
    return app.render(req, res, '/index', req.query)
  })

  server.get('/xe-tai-nho-suzuki', (req, res) => {
    return app.render(req, res, '/carry-suzuki-list', req.query)
  })

  server.get('/xe-du-lich-suzuki', (req, res) => {
    return app.render(req, res, '/car-suzuki-list', req.query)
  })

  server.get('/xe-tai-nho-suzuki/:id', (req, res) => {
    app.render(req, res,  '/carry-suzuki', { id: req.params.id });
  });

  server.get("/xe-du-lich-suzuki/:id", (req, res) => {
    app.render(req, res, '/carry-suzuki', { id: req.params.id });
  });

  server.use(handle);

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
