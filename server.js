const express = require('express');
const path = require('path');
//const apiRoutes = require('./routes/apiRoute');
const htmlRoutes = require('./routes/htmlRoute');

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


// GET request for reviews
app.get('/api/db', (req, res) => {
    // Send a message to the client
    res.json(`${req.method} request received to get the database`);
  
    // Log our request to the terminal
    console.info(`${req.method} request received to get database`);
  });



// TODO Make these files and routes
 // require('/api', apiRoutes);
 app.use('/', htmlRoutes);



// Listening on PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`),
  // console.log('Follow this link to get there http://localhost:3001/api/db 🚀')
);
