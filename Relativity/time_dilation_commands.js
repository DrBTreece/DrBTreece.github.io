function computeXTimeDilation(t) {
  if (ObserverFrame==1) {
    XObs1 = XOrigin;
    XObs2 = XOrigin + V_OBS*t;
    if (t<0) {
      XSignal1 = -1000;
    } else if ((0 <= t) && (t <=100/V_LIGHT)) {
      XSignal1 = 110 - V_LIGHT*t;
      SignalDir = 1.0;
    } else if ((100/V_LIGHT<t) && (t <= 200/V_LIGHT)) {
      XSignal1 = 10 + V_LIGHT*(t-100/V_LIGHT);
      SignalDir = -1.0;
    } else {
      XSignal1 = -1000;
    }


  } else {
    XObs1 = XOrigin - V_OBS*t;
    XObs2 = XOrigin;
    if (t<0) {
      XSignal1 = -1000;
    } else if ((0 <= t) && (t <=100/V_LIGHT_ANGLE_Ycomponent)) {
      XSignal1 = 110 - V_LIGHT_ANGLE_Ycomponent*t;
      SignalDir = 1.0;
    } else if ((100/V_LIGHT_ANGLE_Ycomponent<t) && (t <= 200/V_LIGHT_ANGLE_Ycomponent)) {
      XSignal1 = 10 + V_LIGHT_ANGLE_Ycomponent*(t-100/V_LIGHT_ANGLE_Ycomponent);
      SignalDir = -1.0;
    } else {
      XSignal1 = -1000;
    }



  }
}

function draw_Time_Dilation(t) {
  ctx1.clearRect(0, 0, WIDTH, HEIGHT);
  computeXTimeDilation(t);

  drawEmitterSensorY(XObs1, 110);
  drawSignalY(XObs1, XSignal1, direction = SignalDir);
  drawMirrorY(XObs1, 10);

  drawObserver(XObs1,175,"black");
  drawObserver(XObs2,225,"red");

  indicateTime(t);

}

function Time_Dilation_Description() {
    experiment_label.innerHTML="Time Dilation Experiment";
    experiment_description.innerHTML="In this experiment, the upper observer sees a signal travel straight up and back down.<br>The lower observer sees this signal travel at an angle. The signal travels a farther distance from this perspective.<br>Because the signal travels at the speed of light, each observer experiences a different amount of time between the two events (signal leaving/signal arriving).";
}