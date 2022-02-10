const express = require('express');
const path = require('path');

// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

const PORT = 3001;

// initializes express
const app = express();

// Sets up the static files
app.use(express.static('public'));

// parse application/json
app.use(express.json());

//Sets up data parsing
app.use(express.urlencoded({ extended: true }));

// Set ups the HTML directory path for startup
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public'))
);

// TODO Make these files and routes
require("./routes/apiRoute.js")(app);
require("./routes/htmlRoute.js")(app);



// Listening on PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
