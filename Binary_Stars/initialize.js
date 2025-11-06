  var Canvas = document.getElementById("Canvas1");
  var ctx = Canvas.getContext('2d');
  var WIDTH = Canvas.width;
  var HEIGHT = Canvas.height;

  var velocity_scaling=25.0;


  var t = 0.0;
  const dt = 0.01;
  
  var V_O = 0.0;

  // Vectors: Earth, Star A1, Star A2, Star B1, Star B2
  XObs = WIDTH/2;
  YObs = 230.0;
  var X0 = [0.0,   -15.0, 15.0,     0.0, 0.0];
  var U  = [0.0,   0.2, 0.2,    -0.2,-0.2];
  var Y  = [270.0, 105.0, 105.0, 60.0, 10.0];
  var X  = [0.0,   -15.0, 15.0,     0.0, 0.0];

  var gamma = 1 / Math.sqrt(1 - V_O*V_O);
  var Boost_Prefactor = [0.0, 0.0, 0.0, 0.0, 0.0];
  for (i=0; i<U.length; i++) {
      Boost_Prefactor[i] = 1/(1-U[i]*V_O);
  }

  var Velocity_Label = document.getElementById("Velocity_Label");
  Velocity_Label.innerHTML = V_O.toFixed(2) + " c";
  function Velocity_Down() {
    V_O += -0.05;
    if (V_O < -0.95) { V_O = -0.95; }
    Velocity_Label.innerHTML = V_O.toFixed(2) + " c";
    gamma = 1 / Math.sqrt(1 - V_O*V_O);
    Boost_Prefactor = [0.0, 0.0, 0.0, 0.0, 0.0];
    for (i=0; i<U.length; i++) {
        Boost_Prefactor[i] = 1/(1-U[i]*V_O);
    }
  }
  function Velocity_Up() {
    V_O += 0.05;
    if (V_O > 0.95) { V_O = 0.95; }
    Velocity_Label.innerHTML = V_O.toFixed(2) + " c";
    gamma = 1 / Math.sqrt(1 - V_O*V_O);
    Boost_Prefactor = [0.0, 0.0, 0.0, 0.0, 0.0];
    for (i=0; i<U.length; i++) {
        Boost_Prefactor[i] = 1/(1-U[i]*V_O);
    }
  }

  var Time_Label = document.getElementById("Time_Label");
  Time_Label.innerHTML = t.toFixed(1) + " y";

  var boolRunning = false;
  var Start_Stop_Button = document.getElementById("Start_Stop");
  function Start_Stop() {
    boolRunning = !boolRunning;
    if (boolRunning) {
      Start_Stop_Button.innerHTML = "Start / <b>Stop</b>";
    } else {
      Start_Stop_Button.innerHTML = "<b>Start</b> / Stop";
      t = Math.round((t + Number.EPSILON)*10)/10;
    }
  }
  function Reset() {
    boolRunning=false;
    t = 0;
    Start_Stop_Button.innerHTML = "<b>Start</b> / Stop";
  }


  function Time_Decrease_Tenth() {  t += -0.1;  }
  function Time_Increase_Tenth() {  t += 0.1;  }
  function Time_Decrease_One() {  t += -1.0;  }
  function Time_Increase_One() {  t += 1.0;  }


  var Label_Button = document.getElementById("Switch_Labels");
  var boolLabels = false;
  Label_Button.innerHTML = "Turn On";
  function Switch_Labels() {
    boolLabels = !boolLabels;
    if (boolLabels) {
      Label_Button.innerHTML = "Turn Off";
    } else {
      Label_Button.innerHTML = "Turn On";
    }
  }
