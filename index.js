var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function start() {
  timer = true;
  stopwatch();
}

function stop() {
  timer = false;
}

function reset() {
  timer = false;
  hr =0;
  count =0;
  min = 0;
  sec = 0;

  document.querySelector(".count").innerHTML = "00";
    document.querySelector(".sec").innerHTML = "00";
    document.querySelector(".min").innerHTML = "00";
    document.querySelector(".hr").innerHTML = "00";
}

function stopwatch() {
  if (timer == true) {
    count = count + 1;

    if(count ==100){
        sec = sec + 1;
        count = 0;
    }
    if(sec == 60){
        min = min +1;
        sec = 0;
    }
    if (min == 60) {
        hr += 1;
        min = 0;
    }

    document.querySelector(".count").innerHTML = count;
    document.querySelector(".sec").innerHTML = sec;
    document.querySelector(".min").innerHTML = min;
    document.querySelector(".hr").innerHTML = hr;
    setTimeout("stopwatch()", 10);
  }
}
