function drawObserver(x, y, color) {
ctx1.beginPath();

ctx1.moveTo(x,y-10);
ctx1.lineTo(x,y+10);

ctx1.moveTo(x-5,y);
ctx1.lineTo(x+5,y);

ctx1.moveTo(x-5,y+15);
ctx1.lineTo(x,y+10);
ctx1.lineTo(x+5,y+15);

ctx1.moveTo(x+10,y-20);
ctx1.arc(x,y-20, 10, 0, 2*Math.PI);

ctx1.strokeStyle=color;
ctx1.stroke();
}

function indicateTime(t) {
ctx1.font = "20px Arial";
if (ObserverFrame==1) {
    ctx1.fillStyle = "black";
    OBSText="Observer 1 ";
} else {
    ctx1.fillStyle = "red";
    OBSText="Observer 2 ";
}
ctx1.fillText(OBSText+"time: "+t.toFixed(1),XOrigin-100,275);
}

function drawLight(x,y,color="blue") {
ctx1.beginPath();
ctx1.arc(x,y, 10, 0, 2*Math.PI);
ctx1.strokeStyle=color;
ctx1.stroke();
ctx1.font="15px Arial";
ctx1.fillStyle=color;
ctx1.fillText('\u03B3', x-4, y+2);
}

function drawDetector(x) {
ctx1.beginPath();
ctx1.arc(x,20, 5, 0.5*Math.PI,2.5*Math.PI);
ctx1.moveTo(x, 225)
ctx1.arc(x,230, 5, -0.5*Math.PI, 1.5*Math.PI );
ctx1.fillStyle='#6600AA';
ctx1.fill();
ctx1.beginPath();
ctx1.moveTo(x,230);
ctx1.lineTo(x, 20);
ctx1.strokeStyle='#6600AA';
ctx1.stroke(); 
}

function drawSignal(x,y,direction=1.0) {
ctx1.beginPath();
ctx1.arc(x-7.5*direction,y,5, -direction*0.5*Math.PI, -direction*1.5*Math.PI);
ctx1.strokeStyle='#6600AA';
ctx1.stroke();
ctx1.beginPath();
ctx1.arc(x-7.5*direction,y,10, -direction*0.5*Math.PI, -direction*1.5*Math.PI);
ctx1.strokeStyle='#6600AA';
ctx1.stroke();
}

function drawSignalY(x,y,direction=1.0) {
    let DirFactor = 0.5*(direction+1.0);
    ctx1.beginPath();
    ctx1.arc(x,y+7.5*direction,5, DirFactor*Math.PI, (DirFactor+1)*Math.PI);
    ctx1.strokeStyle='#6600AA';
    ctx1.stroke();
    ctx1.beginPath();
    ctx1.arc(x, y+7.5*direction, 10, DirFactor*Math.PI, (DirFactor+1)*Math.PI);
    ctx1.strokeStyle='#6600AA';
    ctx1.stroke();
}

function drawEmitterSensor(x,y) {
    // chord of 20, angle of 2 pi / 3, radius of 11.47
    ctx1.beginPath();
    ctx1.moveTo(x, y-10);
    ctx1.arc(x+0.5*11.55, y, 11.55, 1.3333*Math.PI, 0.6666*Math.PI, true);
    ctx1.lineTo(x-20,y+10);
    ctx1.lineTo(x-20,y-10);
    ctx1.lineTo(x,y-10);
    ctx1.fillStyle='#6600AA';
    ctx1.fill();
}

function drawEmitterSensorY(x,y) {
    // chord of 20, angle of 2 pi / 3, radius of 11.47
    ctx1.beginPath();
    ctx1.moveTo(x+10, y);
    ctx1.arc(x, y-0.5*11.55, 11.55, -1.8333*Math.PI, -1.1666*Math.PI);
    ctx1.lineTo(x-10,y+20);
    ctx1.lineTo(x+10,y+20);
    ctx1.lineTo(x+10,y);
    ctx1.fillStyle='#6600AA';
    ctx1.fill();
}

function drawMirror(x,y) {
    ctx1.beginPath();
    ctx1.moveTo(x, y-20);
    ctx1.lineTo(x, y+20);
    ctx1.lineTo(x+5, y+20);
    ctx1.lineTo(x+5, y-20);
    ctx1.lineTo(x, y-20);
    ctx1.fillStyle = '#6600AA';
    ctx1.fill();
}

function drawMirrorY(x,y) {
    ctx1.beginPath();
    ctx1.moveTo(x+20, y);
    ctx1.lineTo(x-20, y);
    ctx1.lineTo(x-20, y-5);
    ctx1.lineTo(x+20, y-5);
    ctx1.lineTo(x+20, y);
    ctx1.fillStyle = '#6600AA';
    ctx1.fill();
}