const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

class Particle {
    constructor(moveRadius, step, position, size){
        this.moveRadius = moveRadius;
        this.step = step;
        this.position = position;
        this.size = size;
    }
    draw() {
        let x = Math.cos(this.position)*this.moveRadius + canvas.width/2;
        let y = Math.sin(this.position)*this.moveRadius + canvas.height/2;
        ctx.beginPath();
        ctx.arc(x, y, this.moveRadius/15, 0, Math.PI * 2);
        //drawStar(x, y, 7, this.size, this.size/5);
        ctx.fillStyle = "gold";
        ctx.fill();

        //ctx.strokeStyle = "white";
        //ctx.stroke();
        ctx.closePath();
    }
    update(){
        this.position += this.step;
        this.draw();
    }
    
}

function init(){
    particleArray = [];
    for (let i=0; i<500; i++){
        let moveRadius = Math.random() * canvas.width;
        let step = (Math.random() * 0.002) + 0.002;
        let position = Math.random() * (Math.PI*2);
        let size = (Math.random() * 25) + 15;

        particleArray.push(new Particle(moveRadius, step, position, size));
    }
}

function animate(){
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(0,0,0,0.01)';
    ctx.fillRect(0,0,innerWidth, innerHeight);

    for (let i = 0; i < particleArray.length; i++){
        particleArray[i].update();
    }
}
init();
animate();

window.addEventListener("resize",
    function(){
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        init();
    }
)

function drawStar(positionX, positionY, spikes, outerRadius, innerRadius){
    let rotation = Math.PI/2 * 3;
    let x = positionX;
    let y = positionY;
    let step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(positionX, positionY - outerRadius);
    for (let i = 0; i < spikes; i++) {
        x = positionX + Math.cos(rotation) * outerRadius;
        y = positionY + Math.sin(rotation) * outerRadius;
        ctx.lineTo(x,y);
        rotation += step;

        x = positionX + Math.cos(rotation) * innerRadius;
        y = positionY + Math.sin(rotation) * innerRadius;
        ctx.lineTo(x,y);
        rotation += step;
    }
    ctx.lineTo(positionX, positionY - outerRadius);
    ctx.closePath();
}