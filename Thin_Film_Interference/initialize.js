var Canvas = document.getElementById("Canvas1");
var ctx = Canvas.getContext('2d');
var WIDTH = Canvas.width;
var HEIGHT = Canvas.height;


var interface_x = 0.1*WIDTH;
var interface_y = 0.2*HEIGHT;
var d = 0.375*20;
var thickness = d*HEIGHT/20;

var n = 1.5;

var Slider_Incident = document.getElementById('incident');
var Slider_Incident_Label = document.getElementById('incident_label');
Slider_Incident_Label.innerHTML = "Incident Angle: " + Slider_Incident.value + '&#176;';
var theta_i = parseFloat(Slider_Incident.value)*Math.PI/180.0;
var theta_t = Math.asin(Math.sin(theta_i)/n);
function update_incident_label() {
  theta_i = parseFloat(Slider_Incident.value)*Math.PI/180.0;
  theta_t = Math.asin(Math.sin(theta_i)/n);
  Slider_Incident_Label.innerHTML = "incident angle: " + Slider_Incident.value + '&#176;';

  recompute_interfered_intensity();
  average_color();
  update_screen();
}

var Slider_Index = document.getElementById('index');
var Slider_Index_Label = document.getElementById('index_label');
Slider_Index_Label.innerHTML = "film index of refraction: " + Slider_Index.value;
n = parseFloat(Slider_Index.value);
function update_index_label() {
  n = parseFloat(Slider_Index.value);
  Slider_Index_Label.innerHTML = "film index of refraction: " + Slider_Index.value;
  theta_t = Math.asin(Math.sin(theta_i)/n);

  recompute_interfered_intensity();
  average_color();
  update_screen();
}

var Slider_Thickness = document.getElementById('thickness');
var Slider_Thickness_Label = document.getElementById('thickness_label');
d = parseFloat(Slider_Thickness.value)*20;
thickness = d*HEIGHT/20;
Slider_Thickness_Label.innerHTML = "thickness of film: " + d.toFixed(1) + ' &#956;m';
function update_thickness_label() {
  d=parseFloat(Slider_Thickness.value)*20;
  thickness = d*HEIGHT/20;
  Slider_Thickness_Label.innerHTML = "thickness of film: " + d.toFixed(1) + ' &#956;m';

  recompute_interfered_intensity();
  average_color();
  update_screen();
}


var R_int = 0;
var G_int = 0;
var B_int = 0;

var AVG_COLOR_HEX = '#000000';