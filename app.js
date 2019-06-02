document.addEventListener("click", function(){
    debugger;
    document.getElementById("Title").innerHTML = "Click Event";
  });

  document.addEventListener('touchstart', function(e){
    document.getElementById("TouchEvent").innerHTML = "Touch Event";