# SVG-logo-maker

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Description
This commandline application built with node.js and the inquirer package to collect user input was designed to help freelance web developers generate simple logos for their projects so that they could avoid the need to pay graphic designers. When node index.js is run in the terminal, the user is presented with prompts asking for up to three letters (the text content of their logo), a text colour (a name or hexadecimal), a logo shape (choices are: circle, square or triangle), and a background-fill colour (a name or hexadecimal).  Once this information has been supplied a logo.svg file is immediately added to the files in the working directory.  As well as working with the inquirer package, this application also includes the jest package as a dependency. The code creates a parent class, "shape" and three subclasses "circle," "square" and "triangle". Each new logo involves the creation of a new instance of the circle, square or triangle class which in turn inherits certain properties from the shape superclass while overwriting others to give svg-readable instructions for how to render that shape in particular. Thus this application was a good demonstration of the heritable and polymorphic pillars of Object Oriented Programming, when working as expected. However, to insure that the shape parent class was properly setting the common properties, namely text, text-color and color (ie. background colour), a test was written. And further tests were written to test that each subclass would correctly execute its render method, ensuring that svg-readable code was generated to create either a circle, or a square or a triangle. So the challenge of writing tests and coming to terms with the capabilities of the jest dependency was an integral part of this application. This application was written with future scalability in mind. It may be that we will want to add more shapes in the future, so the structure of the code, using OOP as it does and the tests, which guarantee working code insofar as the circle, square and triangle classes are concerned will hopefully aid developers who wish to expand capabilities pick up where this program has left off.  A particularly challenging part of writing this program had to do with how to force the user to input valid color choices. Regular expressions were used with conditional logic to validate the inputs, but since the user should have the capability to enter either a colour name or a hexadecimal, it was difficult to describe the hexadecimal using a regular expression in such a way that would not exclude a valid colour name input.  In the end the logic does not absolutely exclude all invalid inputs -- the price of allowing enough latitude to accept all the valid ones.  It was also challenging to set a standard font size and position of text for the triangle.  If the biggest letters were chosen (eg. MMM) it was necessary to position them toward the bottom of the shape and to make the font size a little smaller than for the other shapes, or else the text would overflow the shape. But if a one, two or skinny letter logo text is chosen, the eye will probably object to this positioning and would prefer the font to be larger and the text to sit closer to the center of the shape. Conditional logic could be added to allow for different inputs, but that was beyond the scope of this MVP. In future, as well as providing more shape options it would also be good to make the shapes rotatable -- the triangle and square in particular. In terms of using the svg file, I am not sure whether the logo will be exportable as a transparent png or if background removal would have to be done separately. The application only generates one logo at a time and replaces the last logo when the next one becomes the new content of the logo.svg file. Thus if the user wants to create logos for multiple projects the file has to be copied to another place, such as I have done by collecting all the examples I made in my video walkthrough in the examples folder. They have to be renamed, as ever file generated using this application will be called logo.svg.  Somehow when writing the application I invoked ESM protocols, so my application would not work until I had changed the usual require and module.export syntax to import and export. 

[Deployed Application](This application is designed to run wholly in the backend environment, so it has not been deployed.)

## Installation
To run this application, the user needs to have node.js installed on their machine. The dependencies like inquirer, jest and fs are included with the application. The index.js file in the main working directory is the entry point for the application, so the user simply has to enter node index.js in the terminal. The prompts will then appear in the terminal. The tests can be run with the command npm test entered into the terminal from the main working directory.

## Usage
The functionality of the application has been described above. To see it in action, click this link to the walkthrough video:

https://bootcampspot.instructuremedia.com/embed/df2d14a2-adf2-492d-b174-05dbe0677b71


## Credits
This project was a single-author creation.
Extensive reference was made during development to the 140 color names and hexadecimals that are supported in all browsers, as catalogued by W3 Schools: https://www.w3schools.com/tags/ref_colornames.asp. I also referred to the web to figure out the correct regular expressions to design for my use-case.

## License
This project is licensed under the [MIT License](./LICENSE-MIT).

## Contributions
Contributions to this project are welcome. Please contact the developer directly at kwubbenhorst@gmail.com

## Tests
Tests have been supplied to ensure the correct functionality of the shapes.js file. They are included in the library folder and jest will find them automatically when npm test is entered in the terminal from the main working directory.

## Questions
Any questions or user feedback can also be directed to the email address given above: kwubbenhorst@gmail.com