const router = require('express').Router();
const notesDataBase = require('../db/db.json')
const uuid = require('../helpers/uuid');
const fs = require('fs');

//const store = require('../db/store');

// GET request for notes
  router.get('/notes', (req, res) => {
   // console.log('You are executing a GET request for notes');

    let data = fs.readFileSync("./db/db.json", "utf8");

    res.json(JSON.parse(data));
  });

// POST METHOD
 router.post('/notes', (req, res) => {
    const newNote = {
        ...req.body,
        id: uuid(),
      };
  
      console.log(req.body);
  
      //  Read data from JSON file
      let data = fs.readFileSync("./db/db.json", "utf8");
  
      const dataJSON = JSON.parse(data);
  
      // Pushed new note in notes file 'db.json'
      dataJSON.push(newNote);
  
      // Write notes data to 'db.json' file
      fs.writeFile(
        "./db/db.json",
        JSON.stringify(dataJSON, null, 4),
        (err, text) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log("HELLO", text);
        }
      );
      
    console.log("Success, added a new note");

    // send json data response
    res.json(data);
  });


  router.delete('/notes/:id', (req, res) => {
    let notes = fs.readFileSync('./db/db.json', 'utf8');
    const parsedNotes = JSON.parse(notes);
  
    const updatedNotes = parsedNotes.filter((note) => {
      return note.id !== req.params.id;
    });
  
    fs.writeFile('./db/db.json', JSON.stringify(updatedNotes),(err, text) => {
      if (err) {
        console.log(err);
        return;
      }
    });
    res.json(updatedNotes);
  });


//     //   DELETE NOTE
//   router.delete("/api/notes/:id", (req, res) => {
//         // read file
//         let data = fs.readFileSync("./db/db.json", "utf8");

//         // variable for setting up the filter method
//         const dataJSON = JSON.parse(data);

//         // if newNotes has a false value, use filter method and req.params

//         const newNotes = dataJSON.filter((data) => {
//         return data.id !== req.params.id;
//         });
//         // console.log(req.params)
        
//         fs.writeFile( "./db/db.json",JSON.stringify(newNotes),(err, text) => {
//             if (err) {
//             console.error(err);
//             return;
//             }
//             console.log (data.title + 'Removed from notes');
//         });

//         res.json(newNotes);

//   });





    
module.exports = router;
  
  