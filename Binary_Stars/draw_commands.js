function draw_Axes() {
    ctx.beginPath();
    ctx.moveTo(20, 290);
    ctx.lineTo(10,290);
    ctx.lineTo(10,280);
    ctx.strokeStyle='#000000';
    ctx.stroke();

    ctx.fillStyle="#000000";
    ctx.font = "12px Arial";
    ctx.textAlign="left"
    ctx.textBaseline = "middle";
    ctx.fillText("x", 25, 290);
    ctx.textAlign="center"
    ctx.textBaseline = "bottom";
    ctx.fillText("y", 10, 275);
}

function draw_Earth() {
    ctx.beginPath();
    ctx.arc(X[0], Y[0], 25, 0, 2*Math.PI);
    ctx.fillStyle="#4477CC";
    ctx.fill();
}

function draw_Obs() {
    ctx.beginPath();

    // Tip First
    if (V_O >= -0.0001) {
        ctx.moveTo(XObs+20, YObs);
        ctx.lineTo(XObs+10, YObs+5);
        ctx.lineTo(XObs-10, YObs+5);

        ctx.lineTo(XObs-20, YObs+10);
        ctx.lineTo(XObs-15, YObs);
        ctx.lineTo(XObs-20, YObs-10);

        ctx.lineTo(XObs-10, YObs-5);
        ctx.lineTo(XObs+10, YObs-5);
        ctx.lineTo(XObs+20, YObs);
    } else {
        ctx.moveTo(XObs-20, YObs);
        ctx.lineTo(XObs-10, YObs+5);
        ctx.lineTo(XObs+10, YObs+5);

        ctx.lineTo(XObs+20, YObs+10);
        ctx.lineTo(XObs+15, YObs);
        ctx.lineTo(XObs+20, YObs-10);

        ctx.lineTo(XObs+10, YObs-5);
        ctx.lineTo(XObs-10, YObs-5);
        ctx.lineTo(XObs-20, YObs);
    }

    ctx.fillStyle="#000000";
    ctx.fill();

    ctx.fillStyle="#000000";
    ctx.font = "12px Arial";
    ctx.textAlign="left"
    ctx.textBaseline = "middle";
    ctx.fillText("(not moving)", XObs+25, YObs);
}

function draw_Stars_A() {
    ctx.beginPath();
    
    ctx.moveTo(X[1], Y[1]);
    ctx.arc(X[1], Y[1], 6, 0, 2*Math.PI);

    ctx.moveTo(X[2], Y[2]);
    ctx.arc(X[2], Y[2], 3, 0, 2*Math.PI);

    ctx.fillStyle="#CC2211";
    ctx.fill();
}

function draw_Stars_B() {
    ctx.beginPath();
    
    ctx.moveTo(X[3], Y[3]);
    ctx.arc(X[3], Y[3], 6, 0, 2*Math.PI);

    ctx.moveTo(X[4], Y[4]);
    ctx.arc(X[4], Y[4], 3, 0, 2*Math.PI);

    ctx.fillStyle="#AA8800";
    ctx.fill();
}

function draw_position_labels(){

    ctx.beginPath()
    ctx.moveTo(X[1], Y[1]+10);
    ctx.lineTo(X[1], Y[1]+15);
    ctx.lineTo(X[2], Y[2]+15);
    ctx.lineTo(X[2], Y[2]+10);

    ctx.strokeStyle="#FF6666";
    ctx.stroke();
    
    let d = X[2]-X[1];
    ctx.fillStyle="#FF6666";
    ctx.font = "12px Arial"
    ctx.textAlign="center";
    ctx.textBaseline = "top";
    ctx.fillText(d.toFixed(2)+ " ly", 0.5*(X[1]+X[2]), Y[2]+20);





    ctx.beginPath()
    ctx.moveTo(X[3]+10, Y[3]);
    ctx.lineTo(X[3]+15, Y[3]);
    ctx.lineTo(X[4]+15, Y[4]);
    ctx.lineTo(X[4]+10, Y[4]);

    ctx.strokeStyle="#FFBB33";
    ctx.stroke();
    
    d = Y[3]-Y[4];
    ctx.fillStyle="#FFBB33";
    ctx.font = "12px Arial"
    ctx.textAlign="left";
    ctx.textBaseline = "middle";
    ctx.fillText(d.toFixed(2)+ " ly", X[4]+20, 0.5*(Y[3]+Y[4]));





    ctx.beginPath();
    ctx.moveTo(XObs, YObs - 18);
    ctx.lineTo(XObs, YObs - 22);
    ctx.moveTo(XObs, YObs - 20);
    ctx.lineTo(X[0], YObs - 20);
    ctx.moveTo(X[0], YObs - 18);
    ctx.lineTo(X[0], YObs - 22);
    ctx.strokeStyle = "#5599FF";
    ctx.stroke();
    d = (X[0]-0.5*WIDTH)/velocity_scaling;
    ctx.fillStyle="#5599FF";
    ctx.font = "12px Arial"
    if (d<-0.00001) { ctx.textAlign="right";} else {ctx.textAlign="left";}
    ctx.textBaseline = "middle";
    if (d<-0.00001) {
        ctx.fillText(d.toFixed(2) + " ly", X[0] - 5, YObs-20);
    } else {
        ctx.fillText(d.toFixed(2) + " ly", X[0] + 5, YObs-20);
    }


    ctx.beginPath();
    ctx.moveTo(XObs, YObs - 38);
    ctx.lineTo(XObs, YObs - 42);
    ctx.moveTo(XObs, YObs - 40);
    ctx.lineTo(0.5*(X[1]+X[2]), YObs - 40);
    ctx.moveTo(0.5*(X[1]+X[2]), YObs - 38);
    ctx.lineTo(0.5*(X[1]+X[2]), YObs - 42);
    ctx.strokeStyle = "#FF6666";
    ctx.stroke();
    d = (0.5*(X[1]+X[2])-0.5*WIDTH)/velocity_scaling;
    ctx.fillStyle="#FF6666";
    ctx.font = "12px Arial"
    if (d<-0.00001) { ctx.textAlign="right";} else {ctx.textAlign="left";}
    ctx.textBaseline = "middle";
    if (d<-0.00001) {
        ctx.fillText(d.toFixed(2) + " ly", 0.5*(X[1]+X[2]) - 5, YObs-40);
    } else {
        ctx.fillText(d.toFixed(2) + " ly", 0.5*(X[1]+X[2]) + 5, YObs-40);
    }


    ctx.beginPath();
    ctx.moveTo(XObs, YObs - 58);
    ctx.lineTo(XObs, YObs - 62);
    ctx.moveTo(XObs, YObs - 60);
    ctx.lineTo(X[3], YObs - 60);
    ctx.moveTo(X[3], YObs - 58);
    ctx.lineTo(X[3], YObs - 62);
    ctx.strokeStyle = "#FFBB33";
    ctx.stroke();
    d = (X[3]-0.5*WIDTH)/velocity_scaling;
    ctx.fillStyle="#FFBB33";
    ctx.font = "12px Arial"
    if (d<-0.00001) { ctx.textAlign="right";} else {ctx.textAlign="left";}
    ctx.textBaseline = "middle";
    if (d<-0.00001) {
        ctx.fillText(d.toFixed(2) + " ly", X[3] - 5, YObs-60);
    } else {
        ctx.fillText(d.toFixed(2) + " ly", X[3] + 5, YObs-60);
    }

}