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
ctx1.fillText(OBSText+"time: "+Math.floor(t),XOrigin-100,275);
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



function computeXSimultaneity(t) {
if (ObserverFrame==1) {
    XObs1 = XOrigin;
    XObs2 = XOrigin + V_OBS*t;
    XDetector1 = XOrigin - 200;
    XDetector2 = XOrigin + 200;
    XSignal1 = XDetector1 + V_LIGHT*t;
    XSignal2 = XDetector2 - V_LIGHT*t;
} else {
    XObs1 = XOrigin - V_OBS*t;
    XObs2 = XOrigin;
    XDetector1 = XOrigin - (200/gamma) - V_OBS*t;
    XDetector2 = XOrigin + (200/gamma) - V_OBS*t;
    XSignal1 = XOrigin - Math.sqrt((V_LIGHT+V_OBS)/(V_LIGHT-V_OBS))*200 + V_LIGHT*t;
    XSignal2 = XOrigin + Math.sqrt((V_LIGHT-V_OBS)/(V_LIGHT+V_OBS))*200 - V_LIGHT*t;
    if (XSignal1 < XDetector1) { XSignal1 = - 1000;}
    if (XSignal2 > XDetector2) { XSignal2 = - 1000;}
}
}