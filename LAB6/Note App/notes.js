const fs =  require('fs');


// ------------------Begin of Reusable functions ---------------------

var fetchNotes = () => {
  try {                          //if file won't exist
    var notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString);
  } catch(e){
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};


// ------------------End of Reusable functions ---------------------


//  to add a new note
var addNote = (id,name,mail) => {
    var notes = fetchNotes();
    var note = {id,name,mail}
    var duplicateNotes =  notes.filter((note) => { // to check if note already exists
      return note.id === id;
    });
    if (duplicateNotes.length === 0){
      notes.push(note);
      saveNotes(notes);
      return note
    }
  };
//to update the given note
var update =(id,name,mail) => {
    var updateNote = {id,name,mail};
    remove(id);
    var newNote = fetchNotes();
    newNote.push(updateNote);
    saveNotes(newNote);
    //console.log("Note Updated Successfully");
    return updateNote;
}
//to list all the notes
var getAll = () => {
    return fetchNotes();
};

// to read a note
var getNote = (id) => {
    var notes = fetchNotes();
    var getNotes =  notes.filter((note) => {  // to check if note exists and return note
      return note.id === id;
    });
    return getNotes[0]
};

// to delete a note
var remove = (id) => {
    var notes = fetchNotes(); // reusable func
    var filteredNotes =  notes.filter((note) => { // will return all other notes other than "note to be removed"
      return note.id !== id;
    });
    saveNotes(filteredNotes); //save new notes array
    return notes.length !== filteredNotes.length
    
};

// function just to print out note to screen

var logNote = (note) => { 
  console.log('--');
  console.log(`Cusromer Id: ${note.id}`);
  console.log(`Customer Name: ${note.name}`);
  console.log(`Customer Email: ${note.mail}`);
};

// add new function names here to be accessible from other modules

module.exports = {
  addNote, getAll, remove, getNote,logNote,update
};
