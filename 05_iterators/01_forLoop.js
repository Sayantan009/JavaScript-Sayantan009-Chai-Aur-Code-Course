// for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let i = 0; i < 10; i++) {
//     const element = i+1;
//     if (element == 5) {
//         console.log(`5 is best number..just looking like a wow`);
//     }
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     // console.log(`Outer loop ${i}`);
//     for (let j = 1; j <= 10 ; j++) {
//         // console.log(`Inner loop ${i} ${j}`);
//         console.log(i + '*' + j + '=' + (i*j));
//     }
//     console.log(" ");
// }

// const myArr = ["Iron Man", "Thor", "Hit Man", "Captain"]
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
// }

// break and continue
// for (let i = 1; i <= 20; i++) {
//     if (i==5){
//         console.log(`Detected ${i}`);
//         break
//     }
//     console.log(`Value of "i" is: ${i}`);
// }
for (let i = 1; i <= 20; i++) {
    if (i==5){
        console.log(`Detected ${i}`);
        continue
    }
    console.log(`Value of "i" is: ${i}`);
}