const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;


function handlekeyUp(event){3
    if (event.keyCode === 32){
        if (!isJumping) {
            jump()
        }    
    }
}

function jump(){
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 200) {
            clearInterval(upInterval);
        //Descendo
        let downInterval = setInterval(() => {
            if (position <= 0 ) {
                clearInterval(downInterval);
                isJumping = false;

            } else {
                // Alterando o valor de position modifica o tempo de descida do dino
                position -=5;
                dino.style.bottom = position + 'px';
            }
            }, 20);
        } else {
            //Subindo
            position += 120;
            dino.style.bottom = position + 'px';
        }
    }, 40);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let rendomTime = Math.random(1) * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
     if (cactusPosition < -20) {
         clearInterval(leftInterval);
         background.removeChild(cactus);
        
     }  else if (cactusPosition > 0 && cactusPosition < 50 && position < 50) {
         
        //Gamer Over
        clearInterval(leftInterval);
        document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';

     } else {
         cactusPosition -= 10;
         cactus.style.left = cactusPosition + 'px';
     }
    }, 20);
    setTimeout(createCactus, rendomTime);
}
createCactus();
document.addEventListener('keyup', handlekeyUp);