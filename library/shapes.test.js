// Normally I would "require" Circle, Square and Triangle, but ESM has been giving me some issues.
//It prefers "import" and object destructuring notation.
import { Shape, Circle, Square, Triangle } from './shapes';

//A test on the Shape superclass to test the set methods -- important because the color, textColor and
// text are going to be set using these set methods and inherited by the subclasses.

describe('Shape Class', () => {
  test('setColor, setTextColor, and setText methods should set the corresponding properties', () => {
    const shape = new Shape();
    shape.setColor('MidnightBlue');
    shape.setTextColor('NavajoWhite');
    shape.setText('WJK');

    expect(shape.color).toBe('MidnightBlue');
    expect(shape.textColor).toBe('NavajoWhite');
    expect(shape.text).toBe('WJK');
  });
});

// Three similar tests on the Circle, Square and Triangle subclasses that their render methods are 
//functioning as expected. The tests create a new instance of the particular shape, passing some properties
// to it and it is asserted that the rendered circle will match the XML string which will be used
// to write the logo file.    

describe('Circle Class', () => {
  test('Circle should render correctly', () => {
    const circle = new Circle('RoyalBlue', 'RebeccaPurple', 'DHR');
    const expected = `<circle cx="150" cy="100" r="80" fill="RoyalBlue" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="RebeccaPurple">DHR</text>`;
    expect(circle.render()).toEqual(expected);
  });
});

describe('Square Class', () => {
  test('Square should render correctly', () => {
    const square = new Square('DodgerBlue', 'SpringGreen', 'ANM');
    const expected = `<rect x="70" y="20" width="160" height="160" fill="DodgerBlue" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="SpringGreen">ANM</text>`;
    expect(square.render()).toEqual(expected);
  });
});

describe('Triangle Class', () => {
  test('Triangle should render correctly', () => {
    const triangle = new Triangle('LightSeaGreen', 'LemonChiffon', 'DBM');
    const expected = `<polygon points="150, 18 244, 182 56, 182" fill="LightSeaGreen"/>
                <text x="150" y="170" font-size="50" text-anchor="middle" fill="LemonChiffon">DBM</text>`;
    expect(triangle.render()).toEqual(expected);
  });
});



