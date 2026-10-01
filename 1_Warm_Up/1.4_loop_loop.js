//* 1. Loop in loop

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log(`i: ${i}, j: ${j}`);
//   }
// }

//* 2. loop in loop with condition

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < i; j++) {
//     console.log(`i: ${i}, j: ${j}`);
//   }
// }


//* 3. loop in loop with condition 

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j <= i; j++) {
//     console.log(`i: ${i}, j: ${j}`);
//   }
// }


//* 4. loop in loop with condition

// for (let i = 0; i < 3; i++) {
//   for (let j = i; j > 0; j--) {
//     console.log(`i: ${i}, j: ${j}`);
//   }
// }


//* 5. loop in loop with condition

for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}