const router = require('express').Router();
const notesDataBase = require('../db/db.json')
const uuid = require('../helpers/uuid');
const fs = require('fs');
// const index = require('../public/assets/js/index')

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



    //   DELETE NOTE
  router.delete("/api/notes.id", (req, res) => {
        // read file
        let data = fs.readFileSync("./db/db.json", "utf8");

        // variable for setting up the filter method
        const dataJSON = JSON.parse(data);

        // if newNotes has a false value, use filter method and req.params

        const newNotes = dataJSON.filter((note) => {
        return note.id !== req.params.id;
        });
        // console.log(req.params)
        
        fs.writeFile( "./db/db.json",JSON.stringify(newNotes),(err, text) => {
            if (err) {
            console.error(err);
            return;
            }
        });

        res.json(newNotes);
  });


//   router.delete('api/notes/:id', function(req, res) {
//     let data = fs.readFileSync("./db/db.json", "utf8");
//     let dataJSON = JSON.parse(data);
//     var indexOfJSON = dataJSON.map(function(item) { return notes.id; }).indexOf(req.params.id); //find the index of :id
//       if(indexOfJSON === -1) {
//         res.statusCode = 404;
//         return res.send('Error 404: No quote found');
//       }
    
//       var result = json.splice(indexOfJSON,1);
//       fs.writeFile(jsonFilePath, JSON.stringify(result), function(err){
//        if(err) throw err;
//        res.json(true);
//        console.log('trying to delete')
//      });

    
//     });

    
module.exports = router;
  
  