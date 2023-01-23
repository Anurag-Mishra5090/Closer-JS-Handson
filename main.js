// function counter(){
//     var counter = 0;
//     function IncreaseCounter() {
//         return counter += 1;
//     };
//     return IncreaseCounter;
// }
// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// // OUTPUT: getting alert with values 1,2,3,4


// let count = 0;
// (function () {
// if (count === 0) {
// let count = 1;
// console.log(count); 
// }
// });

// // OUTPUT: 1

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); 
//     }, 1000);
//   }

// Output: 3 will be printed 3 times in 1sec difference  

function OuterFunction() {
  let length = 20;
  function InnerFunction() {
      let breadth=50;
      console,console.log(`The area of the rectangle is:->`,length*breadth);
  }
  return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();

// Output: The area of the rectangle is:-> 1000

// function counter(){
//     var counter = 0;
//     function IncreaseCounter() {
//         return counter += 1;
//     };
//     return IncreaseCounter;
// }
// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());


// var a = 12;
//         (function () {
//         alert(a);
//         })();

//         // OUTPUT:getting alert with value 12


//         var a = 10;
//         var x = (function () {
//         var a = 12;
//         return function () {
//         alert(a);
//         };
//         })();
//         x();

//         // Output: getting alert with value 12


//         var globalVar = "xyz";
//         (function outerFunc(outerArg) {
//             var outerVar = 'a';
//             (function innerFunc(innerArg) {
//             var innerVar = 'b';
//             console.log(
//                 "outerArg = " + outerArg + "\n" +
//                 "innerArg = " + innerArg + "\n" +
//                 "outerVar = " + outerVar + "\n" +
//                 "innerVar = " + innerVar + "\n" +
//                 "globalVar = " + globalVar);
//             })(456);
//         })(123);
  
//     OUTPUT 
//             outerArg = 123
//             innerArg = 456
//             outerVar = a
//             innerVar = b
//             globalVar = xyz  