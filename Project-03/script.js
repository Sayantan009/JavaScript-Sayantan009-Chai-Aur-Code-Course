// let clock = document.getElementById('clock')

// const currentTime = () => {
//     let currentTime = new Date()
//     let hours = currentTime.getHours()
//     let minutes = currentTime.getMinutes()
//     let seconds = currentTime.getSeconds()

//     return `${hours}:${minutes}:${seconds}`
// }

// setInterval(() => {
//     clock.innerHTML = currentTime()
// }, 1000);


const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);