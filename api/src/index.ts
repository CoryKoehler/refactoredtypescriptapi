import app from './App'
import * as https from 'https';
import * as fs from 'fs';

var path = require('path');
const port = process.env.PORT || 4999

const httpsOptions = { 
  key: fs.readFileSync((path.resolve('dist/config/key.pem')), "utf8"), 
  cert: fs.readFileSync((path.resolve('dist/config/cert.pem')),"utf8") 
};

https.createServer(httpsOptions, app).listen(port, () => {
  console.log('Express server listening on port ' + port);
})
