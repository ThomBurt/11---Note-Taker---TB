// GET request for reviews
app.get('/api/db', (req, res) => {
    // Send a message to the client
    res.json(`${req.method} request received to get the database`);
  
    // Log our request to the terminal
    console.info(`${req.method} request received to get database`);
  });
  
  // GET request for a single review
  app.get('/api/db/:db_id', (req, res) => {
    if (req.body && req.params.db_id) {
      console.info(`${req.method} request received to get a single a review`);
      const reviewId = req.params.db_id;
      for (let i = 0; i < db.length; i++) {
        const currentNote = db[i];
        if (currentNote.db_id === dbId) {
          res.json(currentNote);
          return;
        }
      }
      res.json('Note ID not found');
    }
  });
  
  