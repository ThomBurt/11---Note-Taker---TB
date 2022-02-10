const router = require('express').Router();
const notesDataBase = require('../db/db.json')
const uuid = require('uuid');
const fs = require('fs');

// GET request for notes
  router.get('/notes', (req, res) => {
    console.log('You are executing a GET request for notes');

    let data = fs.readFileSync("./db/db.json", "utf8");

    res.json(JSON.parse(data));
  });
  
// Post request for notes
//   router.post('/notes'), (req, res) => {
//     const newNote = {
//         ...req.body,
//         id: uuid()
//     }
// }

module.exports = router;
  
  