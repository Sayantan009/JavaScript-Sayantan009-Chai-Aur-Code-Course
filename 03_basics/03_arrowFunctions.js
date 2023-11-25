const user = {
    username: "Hitesh #1213",
    cart_price: 2133,

    welcome_message: function(){
        console.log(`${this.username}, welcome to our site.`);
        console.log(this);
    }
}

// console.log(user.welcome_message());

// user.welcome_message()

// user.username = "Sam"
// user.welcome_message()

// console.log(this);




function chai(){
    username = "IDK"
    // console.log(this.username);
    console.log(this);
}

// chai()



const chaiArrow = () => {
    username = "IDK"
    console.log(this.username);
    console.log(this);
}

// chaiArrow()


// const sumArrow = (num1, num2) => {
//     return num1 + num2
// }

const sumArrow = (num1, num2) =>  num1 + num2 // Implicit return
// const sumArrow = (num1, num2) =>  (num1 + num2) // Implicit return
// const sumArrow = (num1, num2) =>  ({username: "Hitesh"}) // Implicit return


// console.log(sumArrow(12, 124));


const myArr = [2, 24, 1, 24, 52]
myArr.forEach(()=>{
    return
})