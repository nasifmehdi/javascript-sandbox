const rectanglePrototypes = {
  area: function () {
    return this.width * this.length;
  },
  perimeter: function () {
    return 2 * (this.width + this.length);
  },
  isSquare: function () {
    return this.length === this.width;
  },
};

function createRectangle(length, width) {
  return Object.create(rectanglePrototypes, {
    length: {
      value: length,
    },
    width: {
      value: width,
    },
  });
}

const rect = createRectangle(10, 20);
console.log(rect);
console.log(rect.area());
console.log(rect.isSquare());

const rect2 = createRectangle(20, 20);
console.log(rect2.area());
