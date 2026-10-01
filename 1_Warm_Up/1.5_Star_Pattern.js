//* 1. Star Pattern

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = " ";
//   for (let j = 0; j < n; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

//* 2. Star Pattern

// *
// **
// ***
// ****

// let n = 4;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

//* 3. Number Triangle Pattern for j(columns)

// 1
// 12
// 123
// 1234

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j <= i; j++) {
//     row += j + 1;
//   }
//   console.log(row);
// }

//* 4. Number Triangle Pattern for i(rows)

// 1
// 22
// 333
// 4444

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j <= i; j++) {
//     row += i + 1;
//   }
//   console.log(row);
// }

//* 5. Reverse Number Triangle Pattern for j(columns)

// 12345
// 1234
// 123
// 12
// 1

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n - i; j++) {
//     row += j + 1;
//   }
//   console.log(row);
// }

//* 6. Reverse Star Pattern

// *****
// ****
// ***
// **
// *

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n - i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

//* 7. Reverse Star Pattern lesser to greater

//     *
//    **
//   ***
//  ****
// *****

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n-(i+1) ; j++) {
//     row += " ";
//   }
//   for (let k = 0; k <= i; k++) {
//     row += "*";
//   }
//   console.log(row);
// }

//* 8. 10101 Pattern

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   let toggle = 1;
//   for (let j = 0; j < i + 1; j++) {
//     row += toggle;
//     if (toggle == 1) {
//       toggle = 0;
//     } else {
//       toggle = 1;
//     }
//   }
//   console.log(row);
// }

//* 9. 01010 Pattern

let n = 5;
let toggle = 1;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row += toggle;
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}
