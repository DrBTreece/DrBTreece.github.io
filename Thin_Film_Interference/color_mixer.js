function Wavelength_To_RGB( wavelength, IntensityMax=255 ) {
    let Gamma = 0.80;
    let factor = 0.0;
    let Red = 0.0;
    let Blue = 0.0;
    let Green = 0.0;
    
    if ((wavelength >= 380) && (wavelength < 440)) {
        Red = (440.0 - wavelength) / (440 - 380);
        Green = 0.0;
        Blue = 1.0;
    } else if ((wavelength >= 440) && (wavelength < 490)) {
        Red = 0.0;
        Green = (wavelength - 440.0) / (490 - 440);
        Blue = 1.0;
    } else if ((wavelength >= 490) && (wavelength < 510)) {
        Red = 0.0;
        Green = 1.0;
        Blue = (510.0 - wavelength) / (510 - 490);
    } else if ((wavelength >= 510) && (wavelength < 580)) {
        Red = (wavelength - 510.0) / (580 - 510);
        Green = 1.0;
        Blue = 0.0;
    } else if ((wavelength >= 580) && (wavelength < 645)) {
        Red = 1.0;
        Green = (645.0 - wavelength) / (645 - 580);
        Blue = 0.0;
    } else if((wavelength >= 645) && (wavelength < 781)) {
        Red = 1.0;
        Green = 0.0;
        Blue = 0.0;
    } else {
        Red = 0.0;
        Green = 0.0;
        Blue = 0.0;
    }

    if ((wavelength >= 380) && (wavelength < 420)) {
        factor = 0.3 + 0.7*(wavelength-380.0) / (420 - 380);
    } else if ((wavelength >= 420) && (wavelength < 700)) {
        factor = 1.0;
    } else if ((wavelength >= 700) && (wavelength < 781)) {
        factor = 0.3 + 0.7*(780.0-wavelength) / (780 - 700);
    } else {
        factor = 0.0;
    }

    if (Red==0.0){Red=parseInt(0)} else {Red=parseInt(Math.round(IntensityMax * Math.pow(Red*factor, Gamma)));}
    if (Green==0.0){Green=parseInt(0)} else {Green=parseInt(Math.round(IntensityMax * Math.pow(Green*factor, Gamma)));}
    if (Blue==0.0){Blue=parseInt(0)} else {Blue=parseInt(Math.round(IntensityMax * Math.pow(Blue*factor, Gamma)));}
    // return '#'+('0'+Red.toString(16)).substr(-2) + ('0'+Green.toString(16)).substr(-2) + ('0'+Blue.toString(16)).substr(-2);
    return [Red, Green, Blue];
}


function Spectrum_Intensity(wavelength, Max_Intensity) {
    let Peak_Wavelength = 501.3;
    let a = 2.82144;
    return Max_Intensity*(Math.exp(a) - 1)*Math.pow(Peak_Wavelength/wavelength, 3) / (Math.exp(a*Peak_Wavelength/wavelength) - 1);
}

const Unaltered_Spectral_Intensity=[];
const Spectral_Min_Wavelength = 250;
const Spectral_Max_Wavelength = 1000;
for (let i=Spectral_Min_Wavelength;i<Spectral_Max_Wavelength+1;i++) {Unaltered_Spectral_Intensity.push(Spectrum_Intensity(i, 255));}

var Spectral_Intensity_Interfered=[];
for (let i=Spectral_Min_Wavelength; i<Spectral_Max_Wavelength+1; i++) {
    Spectral_Intensity_Interfered.push(Unaltered_Spectral_Intensity[i-Spectral_Min_Wavelength]);
}

function compute_interference(wavelength, n, d, theta_t) {
    let OPD = 2 * n * d*1000 * Math.cos(theta_t);
    return 0.5* (1 + Math.cos(2.0*Math.PI * (OPD/wavelength) ))
}

function recompute_interfered_intensity() {
    for (let i=Spectral_Min_Wavelength; i<Spectral_Max_Wavelength+1; i++) {
        Spectral_Intensity_Interfered[i-Spectral_Min_Wavelength] = Unaltered_Spectral_Intensity[i-Spectral_Min_Wavelength]*compute_interference(i, n, d, theta_t);
    }
}
recompute_interfered_intensity();

function average_color(){
    let R_tot = 0;
    let G_tot = 0;
    let B_tot = 0;
    for (let i=380; i<701; i++) {
      [R_int, G_int, B_int] = Wavelength_To_RGB(i, Spectral_Intensity_Interfered[i-Spectral_Min_Wavelength]);
      R_tot += R_int;
      G_tot += G_int;
      B_tot += B_int;
    }
    let maxRGB = Math.max(R_tot, G_tot, B_tot);
    R_tot = parseInt(R_tot*255/maxRGB);
    G_tot = parseInt(G_tot*255/maxRGB);
    B_tot = parseInt(B_tot*255/maxRGB);

    AVG_COLOR_HEX = '#' + ('0'+R_tot.toString(16)).slice(-2) + ('0'+G_tot.toString(16)).slice(-2) + ('0'+B_tot.toString(16)).slice(-2);
}
average_color();