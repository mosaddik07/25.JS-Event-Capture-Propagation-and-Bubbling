const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this);
    e.stopPropagation();
}

document.body.addEventListener('click', logText)
divs.forEach(div => div.addEventListener('click', logText));

const btn = document.querySelector('button');

function btnFunc() {
    console.log("Click!!");
}

btn.addEventListener('click', btnFunc, { once: true })