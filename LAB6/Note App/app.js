
const fs =  require('fs');
const yargs = require('yargs');

const notes = require('./notes.js');

// ------------ Begin - command configuration -----------------


const idOptions = {
    describe: 'Customer id',
    demand : true,
    alias : 'id'
}

const nameOptions = {
    describe: 'Customer Name',
    demand : true,
    alias : 'n'
}

const mailOptions = {
    describe: 'Customer Mail address',
    demand : true,
    alias : 'e'
}

const argv =  yargs

    .command('add','Add a new note',{
      id: idOptions,
      name: nameOptions,
      mail: mailOptions
    })
    .command('update','Update the given note',{
        id: idOptions,
        name: nameOptions,
        mail: mailOptions
    } )
    .command('list','List all notes')
    .command('read','Read a note',{
      id: idOptions
    })
    .command('remove','Remove a Note',{
        id: idOptions
    })
    .help()
    .argv;


// ------------ End - command configuration -----------------


var command = yargs.argv._[0];

if (command === 'add'){
    var note = notes.addNote(argv.id,argv.name,argv.mail);
    if (note){
     console.log("New Customer added")
      notes.logNote(note);                      //add a new note
    } else{
      console.log("Customer exists already");
    }
}
else if (command === 'update'){
    var updateNote = notes.update(argv.id,argv.name,argv.mail);
    if(updateNote){
        notes.logNote(updateNote);
        console.log('Customer details Updated Successfully');
    }
    else{
        console.log('failed to update customer details');
    }
}

else if (command === 'list') {
  var AllNotes = notes.getAll();
  console.log(`Printing ${AllNotes.length} note(s).`);
  AllNotes.forEach((note)=>{                                //list all note(s)
    notes.logNote(note);
  });
}

else if (command === 'read') {
   var note = notes.getNote(argv.id);
   if(note){
    notes.logNote(note);                                //read a note 
          }
   else{
    console.log("Customer not found");
   }
}
else if (command === 'remove') {
    var noteRemoved = notes.remove(argv.id);
    var message = noteRemoved ? 'Customer was removed' : 'Customer not found';
    console.log(message);
}

else{
  console.log('command note recognized'); 
}
