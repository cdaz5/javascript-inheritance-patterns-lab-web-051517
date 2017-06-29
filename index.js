function Point(x,y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return `(${this.x}, ${this.y})`
}

function Shape() {

}

Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x, y)
}

Shape.prototype.move = function(x,y) {
  this.position = new Point(x, y)
}

function Circle(radius) {
  Shape.call(this);

  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
  return Math.PI * this.radius^2
}

Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius
}

Circle.prototype.diameter = function() {
  return this.radius * 2
}

function Side(length) {
  this.length = length
}

function Polygon(sides) {
  Shape.call(this);
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  return this.sides.map(function (side) {
    return side.length
  }).reduce(function(initial, next) {
    return initial + next;
  })
}


Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

function Quadrilateral(sideLength1, sideLength2, sideLength3, sideLength4) {
  Polygon.call(this, [new Side(sideLength1), new Side(sideLength2), new Side(sideLength3), new Side(sideLength4)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;


function Triangle(sideLength1, sideLength2, sideLength3) {
  Polygon.call(this, [new Side(sideLength1), new Side(sideLength2), new Side(sideLength3)]);
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;

function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height)
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Square(length) {
  Rectangle.call(this, length, length, length, length)
  this.length = length
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.listProperties = function() {
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      console.log(`${prop}`)
    }
  }
}
