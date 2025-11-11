function draw_Film() {


    ctx.fillStyle='#000000';
    ctx.textAlign='left';
    ctx.textBaseline='bottom';
    ctx.font='15px Times';
    ctx.fillText('Air',5,0.4*HEIGHT-5);

    ctx.beginPath();
    ctx.moveTo(0,0.4*HEIGHT);
    ctx.lineTo(WIDTH, 0.4*HEIGHT);
    ctx.lineTo(WIDTH, 0.8*HEIGHT);
    ctx.lineTo(0, 0.8*HEIGHT);
    ctx.lineTo(0, 0.4*HEIGHT);
    ctx.fillStyle = '#CCCCFF';
    ctx.fill();

    ctx.fillStyle='#4444AA';
    //ctx.textAlign='left';
    ctx.textBaseline='top';
    ctx.font='15px Times';
    ctx.fillText('Film',5,0.4*HEIGHT+5);

    ctx.beginPath();
    ctx.moveTo(WIDTH, 0.8*HEIGHT);
    ctx.lineTo(0, 0.8*HEIGHT);
    ctx.lineTo(0, HEIGHT);
    ctx.lineTo(WIDTH, HEIGHT);
    ctx.lineTo(WIDTH, 0.8*HEIGHT);
    ctx.fillStyle = '#553311';
    ctx.fill();

    ctx.fillStyle='#CC9966';
    //ctx.textAlign='left';
    ctx.textBaseline='top';
    ctx.font='15px Times';
    ctx.fillText('Bulk',5,0.8*HEIGHT+5);
}

function draw_Rays() {
    ctx.beginPath();
    ctx.moveTo(interface_x - 1000*Math.sin(theta_i), interface_y - 1000*Math.cos(theta_i));
    ctx.lineTo(interface_x, interface_y);
    ctx.lineTo(interface_x + 1000*Math.sin(theta_i), interface_y - 1000*Math.cos(theta_i));
    ctx.strokeStyle='#000000';
    ctx.setLineDash([5, 5]);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(interface_x, interface_y);
    ctx.lineTo(interface_x + 0.4*HEIGHT*Math.tan(theta_t), 0.8*HEIGHT);
    ctx.lineTo(interface_x + 0.8*HEIGHT*Math.tan(theta_t), 0.4*HEIGHT);
    ctx.lineTo(interface_x + 0.8*HEIGHT*Math.tan(theta_t) + 1000*Math.sin(theta_i), 0.4*HEIGHT - 1000*Math.cos(theta_i));
    ctx.stroke();


    ctx.setLineDash([]);
}

function draw_IR_Rays(){
    ctx.beginPath();
    let s =1;
    let psi = A*Math.sin( -2.0*Math.PI*( s + v*t ) / lambda );
    ctx.moveTo(interface_x - s*Math.sin(theta_i) + psi*Math.cos(theta_i),
               interface_y - s*Math.cos(theta_i) - psi*Math.sin(theta_i));
    while ((s*Math.sin(theta_i) < interface_x) || (s*Math.cos(theta_i) < interface_y)) {
        s+=1;
        psi = A*Math.sin( -2.0*Math.PI*( s + v*t ) / lambda );
        ctx.lineTo(interface_x - s*Math.sin(theta_i) + psi*Math.cos(theta_i),
                   interface_y - s*Math.cos(theta_i) - psi*Math.sin(theta_i));
    }
    ctx.strokeStyle='#DD3333';
    ctx.stroke();
    
    ctx.beginPath();
    s =1;
    psi = A*Math.sin( 2.0*Math.PI*( s - v*t ) / lambda );
    ctx.moveTo(interface_x + s*Math.sin(theta_i) - psi*Math.cos(theta_i),
               interface_y - s*Math.cos(theta_i) - psi*Math.sin(theta_i));
    while ((s*Math.sin(theta_i) < interface_x) || (s*Math.cos(theta_i) < interface_y)) {
        s+=1;
        psi = A*Math.sin( 2.0*Math.PI*( s - v*t ) / lambda );
        ctx.lineTo(interface_x + s*Math.sin(theta_i) - psi*Math.cos(theta_i),
                   interface_y - s*Math.cos(theta_i) - psi*Math.sin(theta_i));
    }
    ctx.strokeStyle='#DD3333';
    ctx.stroke();
}

function draw_T_Rays(){
    ctx.beginPath();
    let s = 1;
    let lambda_1 = lambda/n;
    let psi = A*Math.sin( 2.0*Math.PI*( (s/lambda_1)  - (v*t/lambda) ));
    ctx.moveTo(interface_x + s*Math.sin(theta_t) + psi*Math.cos(theta_t),
               interface_y + s*Math.cos(theta_t) - psi*Math.sin(theta_t));
    while ((s*Math.cos(theta_t) < 0.4*HEIGHT)) {
        s+=1;
        psi = A*Math.sin( 2.0*Math.PI*( (s/lambda_1)  - (v*t/lambda) ) );
        ctx.lineTo(interface_x + s*Math.sin(theta_t) + psi*Math.cos(theta_t),
                   interface_y + s*Math.cos(theta_t) - psi*Math.sin(theta_t));
    }
    ctx.strokeStyle='#DD3333';
    ctx.stroke();
    


    ctx.beginPath();
    let s2 = 1;
    s += 1;
    psi = A*Math.sin( 2.0*Math.PI*( (s/lambda_1)  - (v*t/lambda) ) );
    ctx.moveTo(interface_x + 0.4*HEIGHT*Math.tan(theta_t) + s2*Math.sin(theta_t) - psi*Math.cos(theta_t),
               0.8*HEIGHT - s2*Math.cos(theta_t) - psi*Math.sin(theta_t));
    while ((s2*Math.cos(theta_t) < 0.4*HEIGHT)) {
        s+=1;
        s2+=1;
        psi = A*Math.sin( 2.0*Math.PI*( (s/lambda_1)  - (v*t/lambda) ) );
        ctx.lineTo(interface_x + 0.4*HEIGHT*Math.tan(theta_t) + s2*Math.sin(theta_t) - psi*Math.cos(theta_t),
                   0.8*HEIGHT - s2*Math.cos(theta_t) - psi*Math.sin(theta_t));
    }
    ctx.strokeStyle='#DD3333';
    ctx.stroke();
    


    ctx.beginPath();
    s2 = 1;
    let phi = 2.0*Math.PI*( (s/lambda_1)  - (v*t/lambda) );
    //s += 1;
    psi = A*Math.sin( phi + 2.0*Math.PI*( s2) / lambda );
    ctx.moveTo(interface_x + 0.8*HEIGHT*Math.tan(theta_t) + s2*Math.sin(theta_i) - psi*Math.cos(theta_i),
               interface_y - s2*Math.cos(theta_i) - psi*Math.sin(theta_i));
    while ((s2*Math.sin(theta_t) < interface_x - 0.8*HEIGHT*Math.tan(theta_t))) {
        //s+=1;
        s2+=1;
        psi = A*Math.sin( phi + 2.0*Math.PI*( s2 ) / lambda );
        ctx.lineTo(interface_x + 0.8*HEIGHT*Math.tan(theta_t) + s2*Math.sin(theta_i) - psi*Math.cos(theta_i),
                   interface_y - s2*Math.cos(theta_i) - psi*Math.sin(theta_i));
    }
    ctx.strokeStyle='#DD3333';
    ctx.stroke();
}


function draw_Mask_1() {
    ctx.globalAlpha = 0.8;

    ctx.beginPath();
    ctx.moveTo(40, interface_y);
    ctx.lineTo(interface_x + 0.8*HEIGHT*Math.tan(theta_t), interface_y);
    ctx.lineTo(interface_x , interface_y - 0.8*HEIGHT*Math.tan(theta_t)*Math.tan(theta_i));
    ctx.lineTo(interface_x, 0);
    ctx.lineTo(0,0);
    ctx.lineTo(40, interface_y);

    ctx.fillStyle='#FFFFFF';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(40, interface_y);
    ctx.lineTo(40, 0.8*HEIGHT);
    ctx.lineTo(WIDTH, 0.8*HEIGHT);
    ctx.lineTo(interface_x + 0.8*HEIGHT*Math.tan(theta_t) + 50*Math.cos(theta_i), interface_y + 50*Math.sin(theta_i));
    ctx.lineTo(interface_x + 0.8*HEIGHT*Math.tan(theta_t), interface_y);
    ctx.lineTo(40,interface_y);

    ctx.fillStyle='#CCCCFF';
    ctx.fill();

    ctx.globalAlpha = 1.0;

    ctx.beginPath();
    ctx.lineWidth=2;
    ctx.moveTo(interface_x + 0.8*HEIGHT*Math.tan(theta_t) + WIDTH*Math.cos(theta_i), interface_y + WIDTH*Math.sin(theta_i));
    ctx.lineTo(interface_x + 0.8*HEIGHT*Math.tan(theta_t) - WIDTH*Math.cos(theta_i), interface_y - WIDTH*Math.sin(theta_i));
    ctx.strokeStyle='#882222';
    ctx.stroke();
    ctx.lineWidth=1;
}

function draw_Mask_2() {
    ctx.globalAlpha = 0.8;

    ctx.beginPath();
    ctx.moveTo(interface_x, interface_y);
    ctx.lineTo(interface_x - 10, 0);
    ctx.lineTo(0,0);
    ctx.lineTo(0, interface_y - 25);
    ctx.lineTo(40, interface_y - 25);
    ctx.lineTo(40, interface_y)
    ctx.lineTo(interface_x, interface_y);
    ctx.fillStyle='#FFFFFF';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(interface_x + 0.8*HEIGHT*Math.tan(theta_t), interface_y);
    ctx.lineTo(interface_x + 0.8*HEIGHT*Math.tan(theta_t) - WIDTH*Math.cos(theta_i), interface_y - WIDTH*Math.sin(theta_i));
    ctx.lineTo(WIDTH, interface_y - WIDTH*Math.sin(theta_i));
    ctx.lineTo(WIDTH, 0);
    ctx.lineTo(WIDTH,interface_y);
    ctx.lineTo(interface_x, interface_y);
    ctx.fillStyle='#FFFFFF';
    ctx.fill();

    ctx.globalAlpha = 1.0;

    ctx.beginPath();
    ctx.lineWidth=2;
    ctx.moveTo(interface_x + 0.8*HEIGHT*Math.tan(theta_t) + WIDTH*Math.cos(theta_i), interface_y + WIDTH*Math.sin(theta_i));
    ctx.lineTo(interface_x + 0.8*HEIGHT*Math.tan(theta_t) - WIDTH*Math.cos(theta_i), interface_y - WIDTH*Math.sin(theta_i));
    ctx.strokeStyle='#882222';
    ctx.stroke();
    ctx.lineWidth=1;
}