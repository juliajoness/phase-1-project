const goldenSnitch = document.querySelector("#gif")
const targetPs = document.querySelector ("#targetPs")
let deg = 0, ex = 0, ey = 0, vx = 0, vy = 0, count = 0;
targetPs.addEventListener("mouseover", e => {
    ex = e.x-goldenSnitch.offsetLeft-goldenSnitch.clientWidth/2;
    ey = e.y-goldenSnitch.offsetTop-goldenSnitch.clientHeight/2;
    deg = 360 * Math.atan(ey/ex)/(2 * Math.PI) + 45;
    if(ex < 0){
        deg += 180;
    }
    count = 0;
})

function draw (){
    goldenSnitch.style.transform = 'rotate ('+deg+'deg)'
    if ( count < 100){
        vx += ex/100;
        vy += ey/100;
    }
    goldenSnitch.style.left = vx + 'px';
    goldenSnitch.style.top = vy + 'px';
    count ++
}

setInterval(draw , 1);

