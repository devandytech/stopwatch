document.addEventListener('DOMContentLoaded', () => {
  // global scope for clearInterval
  let intervalID;
  // Time counters 
  let milSec_Counter = 0;
  let sec_Counter = 0;
  let minCounter = 0;
  let hrCounter = 0;
  
  // Time elements 
  let hr = document.getElementById('hour');
  let min = document.getElementById('minute');
  let sec = document.getElementById('seconds');
  let milSec = document.getElementById('milseconds');
  
  // Leading zeros for dynamic view
  let hrZero = document.getElementById('hr-zero');
  let minZero = document.getElementById('min-zero');
  let secZero = document.getElementById('sec-zero');
  let milSecZero = document.getElementById('milsec-zero')
  //console.log(secZero)
  
  // buttons element for manipulating the stop watch
  const startButton = document.getElementById('start');
  const stopButton = document.getElementById('stop');
  const resetButton = document.getElementById('reset');
  
  // Event listeners(start and stop button )
  startButton.addEventListener('click', startCounter);
  stopButton.addEventListener('click', stopCounter)
  resetButton.addEventListener('click', resetCounter)
  
  // start button function 
  function startCounter() {
    clearInterval(intervalID);
    console.log('Start')
    intervalID = setInterval(() => {
      milSec_Counter++;
      milSec.textContent = milSec_Counter;
      
      // conditional statement for mil seconds
      if (milSec_Counter === 10) {
        milSecZero.classList.add("hide");
      } else if (milSec_Counter === 100) {
        milSec_Counter = 0;
        sec_Counter++;
        sec.textContent = sec_Counter;
      } else if (milSec_Counter < 10 && milSec_Counter > 0) {
        milSecZero.classList.remove("hide");
      }
      
      // Seconds
      if (sec_Counter === 10) {
        secZero.classList.add("hide");
      } else if (sec_Counter === 60) {
        sec_Counter = 0;
        minCounter++;
        min.textContent = minCounter;
      } else if (sec_Counter < 10 && sec_Counter > 0) {
        secZero.classList.remove("hide");
      }
      
      // Minutes
      if (minCounter === 10) {
        minZero.classList.add("hide");
      } else if (minCounter === 60) {
        minCounter = 0;
        hrCounter++;
        hr.textContent = hrCounter;
      } else if (minCounter < 10 && minCounter > 0) {
        minZero.classList.remove("hide");
      }
      
      // Hours
      if (hrCounter === 10) {
        hrZero.classList.add("hide");
      } else if (hrCounter === 24) {
        hrCounter = 0;
        minCounter = 0;
        sec_Counter = 0;
        milSec_Counter = 0;
      } else if (hrCounter < 10 && hrCounter > 0) {
        hrZero.classList.remove("hide");
      }
      
    }, 10);
  }
  
  // Stop function 
  function stopCounter() {
    clearInterval(intervalID);
    console.log('Stop')
  }
  
  // Reset function 
  function resetCounter() {
    console.log('Reset');
    hrCounter = 0;
    minCounter = 0;
    sec_Counter = 0;
    milSec_Counter = 0;
    
    if (hr.textContent > 10) {
      hr.textContent = '0' + hrCounter;
    } else {
      hr.textContent = hrCounter;
    }
    if (min.textContent > 10) {
      min.textContent = '0' + minCounter;
    } else {
      min.textContent = minCounter;
    }
    if (sec.textContent > 10) {
      sec.textContent = '0' + sec_Counter;
    } else {
      sec.textContent = sec_Counter;
    }
    if (milSec.textContent > 10) {
      milSec.textContent = '0' + milSec_Counter;
    } else {
      milSec.textContent = milSec_Counter;
    }
  }
})
