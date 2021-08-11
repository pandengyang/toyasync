function mul3(x, y, z) {
  return x * y * z
}

function ThunkMul3(x, y) {
  return function (radius) {
    return mul3(x, y, radius)
  }
}

var circleCircumference = ThunkMul3(2, Math.PI)

console.log(circleCircumference(1))
console.log(circleCircumference(2))
