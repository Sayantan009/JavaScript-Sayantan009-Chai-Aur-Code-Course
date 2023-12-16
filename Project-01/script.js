const grey = document.querySelector('#grey')
const white = document.querySelector('#white')
const blue = document.querySelector('#blue')
const yellow = document.querySelector('#yellow')

const bodyStyle = document.body.style

grey.addEventListener('click', ()=>{bodyStyle.backgroundColor="grey"})
white.addEventListener('click', ()=>{bodyStyle.backgroundColor="white"})
blue.addEventListener('click', ()=>{bodyStyle.backgroundColor="blue"})
yellow.addEventListener('click', ()=>{bodyStyle.backgroundColor="yellow"})