function draw_Film() {

    ctx.beginPath();
    ctx.moveTo(0,interface_y);
    ctx.lineTo(4*interface_x, interface_y);
    ctx.lineTo(4*interface_x, interface_y + thickness);
    ctx.lineTo(0, interface_y + thickness);
    ctx.lineTo(0, interface_y);
    ctx.fillStyle = '#CCCCFF';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(4*interface_x, interface_y + thickness);
    ctx.lineTo(0, interface_y + thickness);
    ctx.lineTo(0, 3*interface_y);
    ctx.lineTo(4*interface_x, 3*interface_y);
    ctx.lineTo(4*interface_x, interface_y + thickness);
    ctx.fillStyle = '#553311';
    ctx.fill();
}

function draw_Rays() {
    ctx.beginPath();
    ctx.moveTo(interface_x - 1000*Math.sin(theta_i), interface_y - 1000*Math.cos(theta_i));
    ctx.lineTo(interface_x, interface_y);
    ctx.lineTo(4*interface_x, interface_y - 3*interface_x/Math.tan(theta_i));
    ctx.strokeStyle='#000000';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(interface_x, interface_y);
    if (thickness*Math.tan(theta_t) > 3*interface_x) {
        ctx.lineTo(4*interface_x, interface_y + 3*interface_x/Math.tan(theta_t));
    } else if (2*thickness*Math.tan(theta_t) > 3*interface_x) {
        ctx.lineTo(interface_x + thickness*Math.tan(theta_t), interface_y + thickness);
        ctx.lineTo(4*interface_x, interface_y + 2*thickness - 3*interface_x/Math.tan(theta_t));        
    } else {
        ctx.lineTo(interface_x + thickness*Math.tan(theta_t), interface_y + thickness);
        ctx.lineTo(interface_x + 2*thickness*Math.tan(theta_t), interface_y);
        ctx.lineTo(4*interface_x, interface_y - (3*interface_x - 2*thickness*Math.tan(theta_t))/Math.tan(theta_i));
    }
    ctx.stroke();


}



function draw_Rainbow(){
    for (let i = Spectral_Min_Wavelength; i<Spectral_Max_Wavelength+1; i++) {
        ctx.beginPath();
        ctx.moveTo(210+0.5*i,300-Spectral_Intensity_Interfered[i-Spectral_Min_Wavelength]);
        ctx.lineTo(210+0.5*i,300);
        [R_int, G_int, B_int] = Wavelength_To_RGB(i);
        ctx.strokeStyle = '#'+('0'+R_int.toString(16)).slice(-2) + ('0'+G_int.toString(16)).slice(-2) + ('0'+B_int.toString(16)).slice(-2)
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.moveTo(210+0.5*Spectral_Min_Wavelength, 300);
    ctx.lineTo(210+0.5*Spectral_Min_Wavelength, 305);
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(210+0.5*Spectral_Max_Wavelength, 300);
    ctx.lineTo(210+0.5*Spectral_Max_Wavelength, 305);
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    ctx.textAlign='center';
    ctx.textBaseline='top';
    ctx.fillStyle='#000000';
    ctx.font = '12px Arial';
    ctx.fillText(Spectral_Min_Wavelength.toString() + ' nm',210+0.5*Spectral_Min_Wavelength, 310);
    ctx.fillText(Spectral_Max_Wavelength.toString() + ' nm',210+0.5*Spectral_Max_Wavelength, 310);
}


function draw_Interfered_Color_Swatch() {
    ctx.beginPath();
    ctx.textAlign='right';
    ctx.textBaseline='middle';
    ctx.fillStyle='#000000';
    ctx.font = '15px Arial';
    ctx.fillText('color you see: ', 400, 375);

    ctx.beginPath();
    ctx.moveTo(410, 325);
    ctx.lineTo(510, 325);
    ctx.lineTo(510, 425);
    ctx.lineTo(410, 425);
    ctx.lineTo(410, 325);
    ctx.fillStyle=AVG_COLOR_HEX;
    ctx.fill();
}