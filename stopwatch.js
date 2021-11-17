  var seconds = 00;
  var tens = 00;
  var interval;
  var input_tens = document.getElementById("tens")
  var input_seconds = document.getElementById("seconds")
  var input_start = document.getElementById('start');
  var input_stop = document.getElementById('stop');
  var input_reset = document.getElementById('reset');

  input_start.onclick = function() {
    clearInterval(interval);
     interval = setInterval(startTimer, 10);
  }

    input_stop.onclick = function() {
       clearInterval(interval);
  }

  input_reset.onclick = function() {
    clearInterval(interval);
    tens = "00";
  	seconds = "00";
    input_tens.innerHTML = tens;
  	input_seconds.innerHTML = seconds;
  }

  function startTimer () {
    tens++;
    if(tens <= 9){
      input_tens.innerHTML = "0" + tens;
    }
    if (tens > 9){
      input_tens.innerHTML = tens;
    }
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      input_seconds.innerHTML = "0" + seconds;
      tens = 0;
      input_tens.innerHTML = "0" + 0;
    }
    if (seconds > 9){
      input_seconds.innerHTML = seconds;
    }
  }
