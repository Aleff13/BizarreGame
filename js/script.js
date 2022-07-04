const mario = window.document.querySelector(".mario");
const pipe = window.document.querySelector(".pipe");
var scoreWindow = window.document.querySelector(".score");
var score = 0;


const jump = () => {

    mario.classList.add("jump");

    setTimeout(removeJump, 1000)

}

const removeJump = () => {

    mario.classList.remove("jump");

}

const hasColision = () => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace("px", "");

    console.log(pipePosition)

    if (pipePosition == -80) {
        score = score + 1;
        scoreWindow.innerText = `Score: ${score}`;
    }

    if (pipePosition <= 80 && pipePosition > 0 && marioPosition <= 80) {

        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`

        clearInterval(loop);

        location.reload();
    }
}

const loop = setInterval(hasColision, 5)

document.addEventListener("touchstart", jump);