var Canvas;
var ctx1;
var WIDTH;
var HEIGHT;

Canvas = document.getElementById("Canvas1");
ctx1 = Canvas.getContext( '2d' );
WIDTH = Canvas.width;
HEIGHT = Canvas.height;

var experiment_label = document.getElementById("Experiment Label");
var experiment_description = document.getElementById("Experiment Description");

var AnimationRunning = document.getElementById("Running");
var boolRunning = AnimationRunning.checked;
var AnimationReset = document.getElementById("RunningReset");
var boolRunningReset = AnimationReset.checked;

var Obs1Frame = document.getElementById("Observer1");
var Obs2Frame = document.getElementById("Observer2");
var ObserverFrame;
function check_Observer() {
if (Obs1Frame.checked==true){
    ObserverFrame=1;
} else {
    ObserverFrame=2;
}
}


var XOrigin = WIDTH/2;
var t = 0;
const dt = 0.1;
const screen_scaling = 4.0;
const V_LIGHT = 1.0*screen_scaling;
var V_OBS = 0.6*screen_scaling;
var gamma = screen_scaling/Math.sqrt(screen_scaling*screen_scaling - V_OBS*V_OBS);
var OBSText="";

var XObs1;
var XObs2;
var XDetector1;
var XDetector2;
var XSignal1;
var XSignal2;

function time_back_one() {
    t+=-1;
}
function time_forward_one() {
    t+=1;
}