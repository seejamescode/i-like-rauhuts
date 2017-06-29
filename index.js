import compression from 'compression';
import express from 'express';
import request from 'request';

const app = express();
const port = process.env.PORT || 8080;
app.use(compression());
app.enable('trust proxy');

app.use((req, res, next) => {
  if (req.secure || req.headers.host === `localhost:${port}`) {
    next();
  } else {
    res.redirect(`https://${req.headers.host}${req.url}`);
  }
});

app.get(`/.well-known/acme-challenge/${process.env.LETS_ENCRYPT_ROUTE}`,
  (req, res) => {
    res.send(process.env.LETS_ENCRYPT_VERIFICATION);
  },
);

app.use(express.static('./build'));

app.listen(port, (err) => {
  if (err) {
    console.log(err); // eslint-disable-line no-console
    return;
  }
  console.log(`App and API is live at http://localhost:${port}`); // eslint-disable-line no-console
});
