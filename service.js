require('dotenv').config();
const app = require('./server.js');
var path = require('path');
var favicon = require('serve-favicon');

const PORT = process.env.PORT || 3000
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.listen(PORT, () => {
    console.log(`http server listening on port ${PORT}`)
});
