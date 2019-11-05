const balloon = document.querySelector("p");
let size = balloon.style.fontSize;
size = '200px';
let sizeAsInteger = parseInt(size);
window.getComputedStyle.apply

let rop = window.getComputedStyle(balloon, null).getPropertyValue("font-size");
console.log(rop);


window.addEventListener('keydown', event => {
    if (sizeAsInteger < 400) {
        if (event.key == 'ArrowUp') {
            inflate();
        }

        if (event.key == 'ArrowDown') {
            deflate();
        }
    }
    else {
        if (sizeAsInteger > 400) {
            balloon.innerHTML = '&#128165;'
            play('myaudio');
            window.removeEventListener('keydown');
        }

    }
    event.preventDefault();


})

const inflate = () => {
    sizeAsInteger += (sizeAsInteger * 0.1);
    size = sizeAsInteger + 'px';
    balloon.style.fontSize = size;
}


const deflate = () => {
    sizeAsInteger -= (sizeAsInteger * 0.1);
    size = sizeAsInteger + 'px';
    balloon.style.fontSize = size;

}

function play(id){
    let audio = document.getElementById(id);
    audio.play();
}
