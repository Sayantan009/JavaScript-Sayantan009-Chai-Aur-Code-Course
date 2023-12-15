// function addLanguage(lName){
//     const listItem = document.createElement('li')
//     listItem.innerHTML = lName

//     document.querySelector('.language').appendChild(listItem)
// }

// setTimeout(() => {
//     addLanguage("Python")
//     addLanguage("Javascript")
// }, 1000);


function addOptiLang(lName){
    const listItem = document.createElement('li')
    listItem.appendChild(document.createTextNode(lName))

    document.querySelector('.language').appendChild(listItem)
}

addOptiLang("Python")


// EDITING VALUES
const liTwo = document.querySelector('li:nth-child(2')
// liTwo.innerHTML = "MOJO"

const newLi = document.createElement('li')
newLi.textContent = "MOJO"
liTwo.replaceWith(newLi)



const liOne = document.querySelector("li:nth-child(1)")
liOne.outerHTML = '<li>TypeScript</li>'


const liLast = document.querySelector("li:nth-child(2)")
liLast.remove()