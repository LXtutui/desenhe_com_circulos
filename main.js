var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var clicar="";
var cor = "black";
var largura = 3;
var raio = 1;
canvas.addEventListener("mousedown", mouseDown);
function mouseDown(){
    clicar = "sigurar mouse";
    cor = document.getElementById("cor").value;
    largura = document.getElementById("largura").value;
    raio = document.getElementById("raio").value;
}

canvas.addEventListener("mouseUp", mouseUp);
function mouseUp(){
    clicar = "soutar mouse";
}

canvas.addEventListener("mousemove", mouseMove);
function mouseMove(evento){
    var posicaoX = evento.clientX - canvas.offsetLeft;
    var posicaoY = evento.clientY - canvas.offsetTop;

    if (clicar == "sigurar mouse"){
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = largura;

        console.log("posição X: " + posicaoX +"/posição Y: " + posicaoY);
        ctx.arc(posicaoX, posicaoY, raio, 0, 360);
        ctx.stroke();
    }
}
function apagar_desenho(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}