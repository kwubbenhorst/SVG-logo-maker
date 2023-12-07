//A super-class Shape is written.  The values for positioning and anchoring of the logo text and
//its font-size are handled here because those will be the same at least for both circle and square.
//(With triangle I must override the textY co-ordinate and fontSize or else the text overflows the 
//shape, at least for some of the wider three-letter combinations (eg. MMM)). The super-class is also 
//given methods to set the color, textColor and text, once these property-values are supplied by the 
//user.  But the choice of background color, textColor and text are independent of the specific shape 
//chosen, so can be set once on the superclass as opposed to in triplicate on each of the subclasses.   

class Shape {
    constructor(color, textColor, text) {
      this.textX = 150; 
      this.textY = 125;
      this.fontSize = 60;
      this.textAnchor = 'middle';
      this.setColor(color);
      this.setTextColor(textColor);
      this.setText(text);
      }
    
      setColor(color) {
        this.color = color;
      }
    
      setTextColor(textColor) {
        this.textColor = textColor;
      }
    
      setText(text) {
        this.text = text;
      }
    }
    
      
//To create an instance of the circle, square or triangle class, the constructor functions for these 
//subclasses first call the super class constructor so they can inherit common properties like text
//positioning and font-size, and the user-defined color, text and textColor. The properties necessary
//to set coordinates as reference points for drawing these particular shapes and the side or radius 
//length values are specified within the subclass for each kind of shape. A render method is given to 
//the subclass objects to render the data into xml code used in svg files.        

class Circle extends Shape {
    constructor(color, textColor, text, cx, cy, r) {
        super(color, textColor, text); 
        this.cx = 150;
        this.cy = 100;
        this.r = 80;
    }

    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}" />
                <text x="${this.textX}" y="${this.textY}" font-size="${this.fontSize}" text-anchor="${this.textAnchor}" fill="${this.textColor}">${this.text}</text>`;
    }
}
  
class Square extends Shape {
    constructor(color, textColor, text, x, y, width, height) {
      super(color, textColor, text);
      this.x = 70;
      this.y = 20;
      this.width = 160; 
      this.height = 160;
    }
  
    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />
                <text x="${this.textX}" y="${this.textY}" font-size="${this.fontSize}" text-anchor="${this.textAnchor}" fill="${this.textColor}">${this.text}</text>`;
    }
  }
  
class Triangle extends Shape {
    constructor(color, textColor, text, vertex1x, vertex1y, vertex2x, vertex2y, vertex3x, vertex3y) {
      super(color, textColor, text);
      this.vertex1x = 150; 
      this.vertex1y = 18;
      this.vertex2x = 244;
      this.vertex2y = 182;
      this.vertex3x = 56;
      this.vertex3y = 182;
      this.textY = 170; //override the inherited value
      this.fontSize = 50; //override the inherited value
    }
  
    render() {
        return `<polygon points="${this.vertex1x}, ${this.vertex1y} ${this.vertex2x}, ${this.vertex2y} ${this.vertex3x}, ${this.vertex3y}" fill="${this.color}"/>
                <text x="${this.textX}" y="${this.textY}" font-size="${this.fontSize}" text-anchor="${this.textAnchor}" fill="${this.textColor}">${this.text}</text>`;
    }
  }

  // I do not strictly need to export Shape since I am only going to use the subclasses to form my 
  //logos (they have already inherited the properties they need from the superclass), but I need to
  //include Shape on the export line if I am going to import it to my shapes.test.js file where its
  //functionality will be tested.  This is object destructuring notation which exports the generic 
  //recipe to make each kind of svg shape -- generic because the user input still needs to set some 
  //of the property-values (that will happen within the generateLogo function (see the generatelogo.js 
  //file), but specific in that what is rendered is the recipe for an instance, not a class. Instead 
  //of module.exports = { Shape, Circle, Square, Triangle }; I have used the term export to satisfy 
  //an issue I was having with ESM
export { Shape, Circle, Square, Triangle };

  
 