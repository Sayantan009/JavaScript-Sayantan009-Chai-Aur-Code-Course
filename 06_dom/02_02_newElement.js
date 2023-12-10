const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[0]);
// console.log(parent.children[0].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
    // console.log(parent.children[i].innerHTML);
}
parent.children[0].style.color = 'orange'
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const dayOne = document.querySelector('.day')
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);
// console.log(dayOne.previousElementSibling);

// console.log("NODES: ", parent.childNodes);



// ******************************* NODELIST *******************************
// const firstH1 = document.createElement('h1')
// console.log(firstH1);
const firstDiv = document.createElement('div')
console.log(firstDiv);
firstDiv.className = 'box'
firstDiv.id = Math.round(Math.random()*10+1)
firstDiv.setAttribute('title', 'generate')
firstDiv.style.backgroundColor = 'green'
firstDiv.innerHTML = "I am created with DOM"
const addTxt = document.createTextNode("Chai aur code")
firstDiv.appendChild(addTxt)