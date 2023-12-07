//This index.js file will run the whole application when node index.js is entered into the terminal.  
//It coordinates all parts of the application by calling the gatherUserInput function and then calling
//the generateLogo function, once it has the answers back from the gatherUserInput function to pass to
//the generateLogo function.  There is error catching both in the gatherUserInput function (because
//it is promise-based) and in the generateLogo function(because it uses the asynchronous writeFile
//method) before we get to the index.js file, where error-catching is also done on the whole process.
//Normally I would "require" gatherUserInput and generateLogo but I am using import with object
//destructuring notation to satisfy an issue I was having with ESM (ES Modules).

import { gatherUserInput } from './library/gatherinput.js';
import { generateLogo } from './library/generatelogo.js';

gatherUserInput()
  .then((answers) => {
    generateLogo(answers);
  })
  .catch((error) => {
    console.error('Error gathering user input:', error);
  });

