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
  
function draw_Simultaneity(t) {
  ctx1.clearRect(0, 0, WIDTH, HEIGHT);
  computeXSimultaneity(t);

  drawDetector(XDetector1);
  drawSignal(XSignal1,20, direction=+1);
  drawSignal(XSignal1,230, direction=+1);
  
  drawDetector(XDetector2);
  drawSignal(XSignal2,20, direction=-1);
  drawSignal(XSignal2,230, direction=-1);
  
  drawObserver(XObs1,50,"black");
  drawObserver(XObs2,200,"red");

  indicateTime(t);

}

function Simultaneity_Description(){
  experiment_label.innerHTML="Simultaneity Experiment";
  experiment_description.innerHTML="In this experiment, the upper observer sees the signals on the left and right flash at the same time (t = 0).<br>The lower observer has a different experience. The signals flash at different times, and neither flashes at time zero.<br>There are many other interesting differences that you can discover by interacting with this experiment.";
}