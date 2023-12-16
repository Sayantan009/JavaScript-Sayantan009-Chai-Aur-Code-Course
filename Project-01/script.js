// const grey = document.querySelector('#grey')
// const white = document.querySelector('#white')
// const blue = document.querySelector('#blue')
// const yellow = document.querySelector('#yellow')

// const bodyStyle = document.body.style

// grey.addEventListener('click', () => { bodyStyle.backgroundColor = "grey" })
// white.addEventListener('click', () => { bodyStyle.backgroundColor = "white" })
// blue.addEventListener('click', () => { bodyStyle.backgroundColor = "blue" })
// yellow.addEventListener('click', () => { bodyStyle.backgroundColor = "yellow" })


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'limegreen') {
            body.style.backgroundColor = e.target.id;
        }

    });
});