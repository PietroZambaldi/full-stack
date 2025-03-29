let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


//quadrado azul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'blue';
ctx.fillRect(1,1,50,50);
ctx.strokeRect(1,1,50,50);

//linha azul
ctx.strokeStyle = 'blue';
ctx.moveTo(1,1);
ctx.lineTo(150,150);
ctx.stroke();
ctx.closePath();
ctx.beginPath();

//quadrado vermelho
ctx.strokeStyle = 'red';
ctx.fillStyle = 'red';
ctx.fillRect(250,1,50,50);
ctx.strokeRect(250,1,50,50);

//linha vermelha
ctx.strokeStyle = 'red';
ctx.moveTo(150,150);
ctx.lineTo(300,1);
ctx.stroke();
ctx.closePath();

//linha no meio
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(1,150);
ctx.lineTo(300,150);
ctx.stroke();
ctx.closePath();

//linha roxa
ctx.beginPath();
ctx.strokeStyle = 'purple';
ctx.moveTo(150,150);
ctx.lineTo(150,250);
ctx.stroke();
ctx.closePath();

//quadrado meio esquerdinha baixo
ctx.beginPath();
ctx.strokeStyle = 'aqua';
ctx.fillStyle = 'aqua';
ctx.fillRect(1,152,30,30)
ctx.strokeRect(1,152,30,30)
ctx.closePath();

//quadrado meio esquerdinha cima
ctx.beginPath();
ctx.strokeStyle = 'aqua';
ctx.fillStyle = 'aqua';
ctx.fillRect(1,118,30,30)
ctx.strokeRect(1,118,30,30)
ctx.closePath();

//quadrado meio direitinha baixo
ctx.beginPath();
ctx.strokeStyle = 'aqua';
ctx.fillStyle = 'aqua';
ctx.fillRect(270,152,30,30)
ctx.strokeRect(270,152,30,30)
ctx.closePath();

//quadrado meio direitinha cima
ctx.beginPath();
ctx.strokeStyle = 'aqua';
ctx.fillStyle = 'aqua';
ctx.fillRect(270,118,30,30)
ctx.strokeRect(270,118,30,30)
ctx.closePath();

//quadrado vermelho meio
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.fillStyle = 'red';
ctx.fillRect(118,152,30,30)
ctx.strokeRect(118,152,30,30)
ctx.closePath();

//escada amarelinha esquerdinha
ctx.beginPath();
ctx.strokeStyle = 'yellow';
ctx.fillStyle = 'yellow';
ctx.fillRect(1,240,60,60)
ctx.strokeRect(1,240,60,60)
ctx.closePath();

//tapo branco do amarelo
ctx.beginPath();
ctx.strokeStyle = '#c9c9c9';
ctx.fillStyle = '#c9c9c9';
ctx.fillRect(40,240,52,30)
ctx.strokeRect(40,240,52,30)
ctx.closePath();

//escada pretinha direitinha
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.fillStyle = 'black';
ctx.fillRect(230,240,90,90)
ctx.strokeRect(230,240,90,90)
ctx.closePath();

//tapo branco do preto
ctx.beginPath();
ctx.strokeStyle = '#c9c9c9';
ctx.fillStyle = '#c9c9c9';
ctx.fillRect(200,240,62,32)
ctx.strokeRect(200,240,62,32)
ctx.closePath();

// bola direita baixo
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(200,200,20,1.5*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// bola esquerda baixo
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(80,200,20,1.5*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// bola central
ctx.beginPath();
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'purple';
ctx.arc(150,115,16,1.5*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// bola esquerda baixo
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(80,200,20,1.5*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//arco baixo full
ctx.beginPath();
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'green';
ctx.arc(150,300,50,1*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//arco esquerda
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.arc(149,300,75,1*Math.PI,1.5*Math.PI);
ctx.stroke();
ctx.closePath();

//arco direita
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.arc(151,300,65,1.5*Math.PI,1*Math.PI);
ctx.stroke();
ctx.closePath();

//arco baixo full
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.arc(150,150,60,1*Math.PI,2*Math.PI);
ctx.stroke();
ctx.closePath();

//arco esqueda meia bomba
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.arc(150,150,90,1*Math.PI,1.25*Math.PI);
ctx.stroke();
ctx.closePath();

//arco direita meia bomba
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.arc(150,150,90,1.75*Math.PI,2*Math.PI);
ctx.stroke();
ctx.closePath();



let canvas2 = document.getElementById('canvas2');
let ctxa = canvas2.getContext('2d');

// sol
ctxa.beginPath();
ctxa.fillStyle = 'yellow';
ctxa.strokeStyle = 'yellow';
ctxa.arc(150,115,16,1.5*Math.PI,3.5*Math.PI);
ctxa.fill();
ctxa.stroke();
ctxa.closePath();



