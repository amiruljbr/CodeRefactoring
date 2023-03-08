class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }
}

class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  draw() {
    console.log('Drawing a circle at', this.x, ',', this.y, 'with radius', this.radius);
  }
}

class Square extends Shape {
  constructor(x, y, side) {
    super(x, y);
    this.side = side;
  }

  draw() {
    console.log('Drawing a square at', this.x, ',', this.y, 'with side', this.side);
  }
}

class RedCircle extends Circle {
  constructor(x, y, radius) {
    super(x, y, radius);
    this.color = 'red';
  }

  draw() {
    console.log('Drawing a red circle at', this.x, ',', this.y, 'with radius', this.radius);
  }
}

class RedSquare extends Square {
  constructor(x, y, side) {
    super(x, y, side);
    this.color = 'red';
  }

  draw() {
    console.log('Drawing a red square at', this.x, ',', this.y, 'with side', this.side);
  }
}

const circle = new Circle(10, 10, 5);
const square = new Square(20, 20, 10);
const redCircle = new RedCircle(30, 30, 7);
const redSquare = new RedSquare(40, 40, 12);

circle.draw(); // Drawing a circle at 10 , 10 with radius 5
square.draw(); // Drawing a square at 20 , 20 with side 10
redCircle.draw(); // Drawing a red circle at 30 , 30 with radius 7
redSquare.draw(); // Drawing a red square at 40 , 40 with side 12

circle.move(5, 5);
square.move(10, 10);
redCircle.move(15, 15);
redSquare.move(20, 20);

circle.draw(); // Drawing a circle at 15 , 15 with radius 5
square.draw(); // Drawing a square at 30 , 30 with side 10
redCircle.draw(); // Drawing a red circle at 45 , 45 with radius 7
redSquare.draw(); // Drawing a red square at 60 , 60 with side 12