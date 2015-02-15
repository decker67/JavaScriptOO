(function () {

  function Shape(x, y) {
    var x_ = x
    var y_ = y;

    var getX = function () {
      return x_;
    };
    var getY = function () {
      return y_;
    };

    return {
      getX: getX,
      getY: getY
    }
  }

  function Circle(x, y, r) {
    var shape = Shape(x, y);
    var r_ = r;

    var getRadius = function () {
      return r_;
    };

    var draw = function () {
      console.log('drawing a circle');
    };

    shape.getRadius = getRadius;
    shape.draw = draw;
    return shape;
  }

  function Square(x, y, size) {
    var shape = Shape(x, y);
    var size_ = size;

    var getSize = function () {
      return size_;
    };

    var draw = function () {
      console.log('drawing a square');
    };

    shape.getSize = getSize;
    shape.draw = draw;
    return shape;
  }

  var shapes = [];
  shapes.push(Square(10, 20, 30));
  shapes.push(Circle(40, 50, 60));

  shapes.forEach(function(shape) {
    console.log(typeof shape);
    console.log(shape instanceof Object);
    shape.draw();
    console.log(shape.getX(), shape.getY());
  });



})();