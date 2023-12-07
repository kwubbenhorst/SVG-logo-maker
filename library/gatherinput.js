// The package needed to gather the user input with the prompts. Typically I would write const inquirer
// = require('inquirer'); but I was having an issue with ESM, so have changed all my requires to import
//in order to make the application run.
import inquirer from 'inquirer';

//An array of questions to collect user input using the inquirer prompt module. Validate properties 
//have been added to some objects to test at this stage for valid input. A valid entry must match
//either the regular expression (regex) for hexidecimals /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/ (a 
//number of 3 or 6 characters where the characters may be any of A through F, a through f and 0-9 
//and which must begin with #) or the regex for colour names /^[a-zA-Z]+$/ (a string of any length
//consisting only of upper or lower case letters).  The specs for this project suggested that I allow
//spaces and dashes to be included here as well, but I have excluded them because, while there are 140
//colour names that are renderable in any browser, they must be written in Pascal case and will not be
//recognized if they include spaces or dashes. I have also made the # mandatory in the hex number
//regex because SVG will not recognize hex codes that do not begin with #. It will default to black.
//Ideally I would like some logic to force the user to enter # first when entering a hex code but I 
//can't exclude all entries that don't start with # because this would exclude valid colour names too.
//If a user enters a hex code without # that includes both numbers and letters the entry will be  
//rejected, because /^[a-zA-Z]+$/ excludes entries containing numbers. But there are some hex codes,
//eg. DDEEFF (a light blue) that consist solely of letters. These could still slip through. The prompt
//itself tells the user they must begin hex codes with # and write compound colour names in Pascal case,
//but I have not found a way to entirely enforce this in the logic).         

const questions = [
  {
    type: 'input',
    message: 'Please enter text for your logo (up to 3 characters)',
    name: 'logoText',
    validate: (input) => 
        (input.length >= 1 && input.length <= 3) ? true : 'Please enter a logo text of 1-3 characters.'    
  },
  {
    type: 'input',
    message: 'Please enter a colour for your logo text (by colour name or hexadecimal code (begin hex codes with # and write compound color names in Pascal case eg. HotPink).',
    name: 'logoTextColour',
    validate: (input) =>
    (/^[a-zA-Z]+$/.test(input) || /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(input)) ? true : 'Please enter a valid colour name or hexadecimal colour code (begin hex codes with # and write compound colour names in Pascal Case eg. MidnightBlue).'
  },
  {
    type: 'list',
    message: 'Please select a logo shape from the following options',
    name: 'logoShape',
    choices: [
      'Circle',
      'Square',
      'Triangle',
    ],
  },
  {
    type: 'input',
    message: 'Please select a background colour (by colour name or hexadecimal code) to fill the shape you have selected for your logo (begin hex codes with # and write compound colour names in Pascal case eg. MidnightBlue',
    name: 'logoShapeBGColour',
    validate: (input) =>
        (/^[a-zA-Z]+$/.test(input) || /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(input)) ? true : 'Please enter a valid colour name or hexadecimal colour code (begin hex codes with # and write compound colour names in Pascal case eg. HotPink).'
  }, 
];

//This function will gather user input and return a promise which resolves in terms of valid input
//being received, or rejects in the case of an error.  The user data is asynchronously gathered and 
//processed inside this function, so that in the case of a successful resolution it can then be passed
//to the index.js file where this function is called and its returned answers passed to the generateLogo
//function which is defined in the generateLogo.js script.

function gatherUserInput() {
    return new Promise ((resolve, reject) => {
        inquirer
            .prompt(questions)
            .then((answers) => {
                resolve(answers);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

// Export the gatherUserInput function so it can be called elsewhere (index.js). Normally I would write
//module.exports = gatherUserInput; but I have adjusted to export to satisfy an ESM issue I was having.

export { gatherUserInput };
