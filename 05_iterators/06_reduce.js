const myNums = [1, 2, 3, 4]

let total = myNums.reduce(function (acc, cv) {
    console.log(`The accumulator is: ${acc} and the current value is: ${cv} and the sum is: ${acc + cv}`);
    return acc + cv
}, 0)
console.log(total);

total = myNums.reduce((acc, cv) => (acc + cv), 0)
console.log(total);

const shoppingCart = [
    {
        courseName: "Js Course",
        coursePrice: 2999
    },
    {
        courseName: "Python Course",
        coursePrice: 9999
    },
    {
        courseName: "Java Course",
        coursePrice: 6999
    },
    {
        courseName: "Data science Course",
        coursePrice: 12999
    }
]

const cartPrice = shoppingCart.reduce((acc, item)=>(acc + item.coursePrice),0)
console.log(cartPrice);