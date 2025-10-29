function computeXLengthContraction(t) {
  if (ObserverFrame==1) {
    XObs1 = XOrigin;
    XObs2 = XOrigin + V_OBS*t;
    XMirror = XOrigin + 200;
    if (t<0) {
      XSignal1 = -1000;
    } else if ((0 <= t) && (t <=200/V_LIGHT)) {
      XSignal1 = XOrigin + V_LIGHT*t;
      SignalDir = 1.0;
    } else if ((200/V_LIGHT<t) && (t <= 400/V_LIGHT)) {
      XSignal1 = XOrigin + 200 - V_LIGHT*(t-200/V_LIGHT);
      SignalDir = -1.0;
    } else {
      XSignal1 = -1000;
    }


  } else {
    XObs1 = XOrigin - V_OBS*t;
    XObs2 = XOrigin;
    XMirror = XOrigin + (200/gamma) - V_OBS*t;
    if (t<0) {
      XSignal1 = -1000;
    } else if ((0 <= t) && (t <=TimeOfCollision)) {
      XSignal1 = XOrigin + V_LIGHT*t;
      SignalDir = 1.0;
    } else if ((TimeOfCollision<t) && (t <= 2*gamma*200/V_LIGHT)) {
      XSignal1 = XOrigin + (V_LIGHT/(V_LIGHT+V_OBS))*(200/gamma) - V_LIGHT*(t-TimeOfCollision);
      SignalDir = -1.0;
    } else {
      XSignal1 = -1000;
    }



  }
}

function draw_Length_Contraction(t) {
  ctx1.clearRect(0, 0, WIDTH, HEIGHT);
  computeXLengthContraction(t);

  drawEmitterSensor(XObs1, 110);
  drawSignal(XSignal1, 110, direction = SignalDir);
  drawMirror(XMirror, 110);

  drawObserver(XObs1,175,"black");
  drawObserver(XObs2,225,"red");

  indicateTime(t);

}

function Length_Contraction_Description() {
    experiment_label.innerHTML="Length Contraction Experiment";
    experiment_description.innerHTML="In this experiment, the upper observer sees a light emitting box as being some distance from a mirror.<br>The lower observer, sees the emitter and mirror as being closer together.<br>Notice, too, how long it takes the light to go back and forth in each case.";
}