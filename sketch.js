// SKETCH 1

// // function setup() {
// //   createCanvas(windowWidth, windowHeight);
// //   // frameRate(1);
// //   rectMode(CENTER);
// //   // noLoop();
// // }

// // function draw() {
// //   background(220);
// //   let length = [0, 200, 400, 600, 800, 1000, 1200, 2400]
// //   let squareSizes = [25, 50, 100, 200, 400, 800, 1600]
// //   let degrees = 10;

// //   let colors = ['#9b59b6', '#3498db', '#2ecc71', '#1abc9c', '#34495e']

// //   for (let i=0; i < 500; i++) {
// //     let randomNum = generateRandomNum(squareSizes.length)
// //     let randomColor = colors[generateRandomNum(colors.length)]


// //     let c = color(randomColor)   
// //     fill(c)
// //     noStroke()
// //     rotate(degrees);
// //     degrees += 10
// //     // translate(generateRandomNum(window.innerWidth) / 8, generateRandomNum(window.innerHeight) / 8);
// //     square(length[i],0, squareSizes[randomNum])
// //   }
// // }

// // function windowResized() {
// //   resizeCanvas(windowWidth, windowHeight);
// // }

// // function generateRandomNum(max) {
// //   return Math.floor(Math.random() * Math.floor(max));
// // }

// var x = 0;
// var bool = true;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   frameRate(10);
//   // rectMode(CENTER);
//   // noLoop();
// }

// function draw() { 
  
//   // background(220)
//   let colors = ['#18dcff', '#17c0eb', '#999', '#666', '#333']
	
//   for (let i=0; i < 5000; i++) {
//     let randomColor = colors[generateRandomNum(colors.length)]
//     let c = color(randomColor)   
//     fill(c)
//     noStroke()

//     x += PI / 2 * 0.00001

//     translate (width/2, height/50)
//     rotate(x)
//     triangle(width/TAU, height/PI, width/PI, height/4, width/2, width/4)
//   }
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

// function generateRandomNum(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// SKETCH 2

let n = 2
let d = 71

function setup() {
  createCanvas(windowWidth, windowHeight)
  // frameRate(1)
  angleMode(DEGREES)
}

function draw() {
  let s = window.innerWidth / 3
  background(0)
  translate(width/2, height/2)
  strokeWeight(0.5)

  noFill()
  beginShape()
  for (let i = 0; i < 361; i++) {
    stroke("#7d5fff")
    let k = i * d
    let r = s * sin(n * k)
    let x = r * cos(k)
    let y = r * sin(k)
    vertex(x,y)
    n += 0.0000001
    d += 0.00000001
  }
  endShape(CLOSE)

  // noFill()
  // stroke("#c56cf0")
  // strokeWeight(0.25)
  // beginShape()
  // for (let i = 0; i < 361; i++) {
  //   let k = i * d2
  //   let r = s * sin(n2 * k)
  //   let x = r * cos(k)
  //   let y = r * sin(k)
  //   vertex(x,y)
  // }
  // endShape(CLOSE)

  // noFill()
  // stroke("#7158e2")
  // strokeWeight(1)
  // beginShape()
  // for (let i = 0; i < 361; i++) {
  //   let k = i
  //   let r = s1 * sin(n2 * k)
  //   let x = r * cos(k)
  //   let y = r * sin(k)
  //   vertex(x,y)
  //   n2 += 0.0000001
  //   d2 += 0.0000001
  //   s1 += 0.01
  // }
  // endShape(CLOSE)

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function generateRandomNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}