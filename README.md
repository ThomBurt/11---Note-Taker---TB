# Note Taker Starter Code

# NPM installs:
- Express
- Nodemon
- UUID - unique ID package



https://tranquil-ravine-24692.herokuapp.com/ | https://git.heroku.com/tranquil-ravine-24692.git


# Project Description

This project is a note taking app, that allows the user to create, save and delete notes, much like the notes app on your mobile device.

The note frontend is connected to the server backend which is running the code to manage the database.


<img src="images\app screenshot.png" alt="Note Taker" width="512" height="240">


# Acceptance Criteria
GIVEN a note-taking application ✔️
WHEN I open the Note Taker ✔️
THEN I am presented with a landing page with a link to a notes page ✔️
WHEN I click on the link to the notes page ✔️
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column ✔️
WHEN I enter a new note title and the note’s text ✔️
THEN a Save icon appears in the navigation at the top of the page ✔️
WHEN I click on the Save icon ✔️
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes ✔️
WHEN I click on an existing note in the list in the left-hand column ✔️
THEN that note appears in the right-hand column ✔️
WHEN I click on the Write icon in the navigation at the top of the page ✔️
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column ✔️

# Bonus
DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. ✔️

In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.✔️
