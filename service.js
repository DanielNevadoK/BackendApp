const express = require('express');
const app = express();

// Other middleware and route handlers can go here.

// Use the favicon middleware to serve the favicon.ico file.
const favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Start your server
const port = 3000; // or any other port you prefer
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


