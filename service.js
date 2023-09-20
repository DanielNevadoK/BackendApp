require('dotenv').config();
const app = require('./server.js');
var path = require('path');

const PORT = process.env.PORT || 3000
app.use(path.join(BackendApp, 'public'))

app.listen(PORT, () => {
    console.log(`http server listening on port ${PORT}`)
});
