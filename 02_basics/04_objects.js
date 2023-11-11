// const tinderUser = new Object(); // singleton object
const tinderUser = {}; // Non singleton object

tinderUser.id = "321312waw"
tinderUser.name = "Secyiea"
tinderUser.isLoggedIn = false

console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullName: {
        user11232:{
        firstName: "Sohame", 
        lastName: "Das"},

        user11233:{
        firstName: "Sofia", 
        lastName: "Hsaw"}
    }
}

// console.log(regularUser.fullName.user11233.fName);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

console.log(obj3);

const users = [
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 2,
        email: "user2@gmail.com"
    },
    {
        id: 3,
        email: "user3@gmail.com"
    }
]

console.log(users);
console.log(users[0].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));




// ******************************************************************************
const course= {
    courseName: 'Js in Hindi',
    coursePrice: '999',
    courseInstructor: 'Hitesh'
}

// console.log(course.courseInstructor);

// obj destructuring
const {courseInstructor: instructor} = course
console.log(instructor);

// const navbar = ({company}) => {

// }

// navbar(company = 'hitesh')

// API
// {
//     coursename: 'Js in Hindi',
//     price: '999',
//     Instructor: 'Hitesh'
// }