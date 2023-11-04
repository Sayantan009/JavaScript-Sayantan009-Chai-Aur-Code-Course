let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

// let declaredDate = new Date(2023, 9, 23)
// let declaredDate = new Date(2023, 9, 23, 5, 3)
let declaredDate = new Date("2023-01-12")
console.log(declaredDate.toLocaleString());


let timeStamps = Date.now()

console.log(timeStamps);
console.log(declaredDate.getTime());
console.log(declaredDate.getHours());
console.log(Math.round(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getHours());

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))