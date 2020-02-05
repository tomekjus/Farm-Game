// const one = document.getElementById('one');


let timeleft = 10;
let downloadTimer = setInterval(function(){
  document.getElementById("progressBar").value = 10 - timeleft;
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
}, 1000);
