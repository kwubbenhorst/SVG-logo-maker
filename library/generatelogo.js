//These are the three things I need to generate my logo: 
//the user input, the blueprint that will create my shapes, and fs to write my .svg file
//Normally I would "require" jf and { Circle, Square, Triangle }, but ESM prefers "import" and the
// object destructuring syntax, so I have adjusted to this to enable my application to run 
import fs from 'fs';
import { Circle, Square, Triangle } from './shapes.js';


//This function is going to end by writing a logo.js file.  It is called from the index.js script so
//will have access to the user answers passed from there. The user answers are checked using if 
//conditionals to see what shape the user wants for their logo. Then a new instance of that shape is 
//created and the render method is used to combine the known information in the shapes.js file with 
//the user answers which will give definite values to properties whose value was previously defined 
//in terms of variables.  This complete svg recipe to make a given shape according to user 
//specifications is stored in a variable svgContent, and that variable is updated to include the 
//information in the svg tag (canvas dimensions, etc.). The writeFile method is then invoked upon the 
//file structure object so that a new logo.svg file is written with the svg content we have developed.
//A callback function is added either to communicate an error or that the logo.svg file has been written.     
function generateLogo(answers) {
    console.log('Answers received:', answers);

  //Declare the svgContent variable as an empty string.  Update it when the new instance of the chosen
  //shape has been created with the user-defined property-values, to the rendered recipe for that particular
  //logo.  
  let svgContent = '';
  if (answers.logoShape === 'Circle') {
    const circle = new Circle(answers.logoShapeBGColour, answers.logoTextColour, answers.logoText);
    svgContent = circle.render();
  } else if (answers.logoShape === 'Square') {
    const square = new Square(answers.logoShapeBGColour, answers.logoTextColour, answers.logoText);
    svgContent = square.render();
  } else {
    const triangle = new Triangle(answers.logoShapeBGColour, answers.logoTextColour, answers.logoText);
    svgContent = triangle.render();
  }
  

  //Update the svgContent variable again to contain not only the code to create the shape and the text inside
  //but also the svg tag necessary to write a complete svg file.
    svgContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${svgContent}
    </svg>`;

  // Write the SVG content to a file called 'logo.svg'
  fs.writeFile('logo.svg', svgContent, (err) => {
    if (err) {
      console.error('Error writing logo.svg:', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
}

//Export the generateLogo function so it can be called from elsewhere (index.js). Normally I would 
//write module.exports = generateLogo; but I have adjusted to export and the object destructuring 
//notation to satisfy an issue I was having with ESM

export { generateLogo };
  
