document.addEventListener("click", function(){
    debugger;
    //document.getElementById("Title").innerHTML = "Click Event";
    if(firstTimeClicked){
        interval=setInterval(timer,10)
        firstTimeClicked = false;
    }else{
        newLap();
    }
    
  });


    var m=0;    // minute
    var s=0;    // second
    var ms=0;   // millisecond
    var newlap=1;
    var started=false;  
    var interval;
    var firstTimeClicked = true;

    function timer() {
        document.getElementById("timer").innerHTML="Timer: "+m+":"+s+":"+ms/10;
        ms+=10;
        
        if(ms==1000){
            s+=1;
            ms=0;
        }
        
        if(s==60){
            m+=1;
            s=0;
        }
    }
    
    function newLap() {
            var laplbl = document.createElement("label");
            laplbl.setAttribute("class","lap");
            var laplbltxt = document.createTextNode("LAP"+newlap+" - "+m+":"+s+":"+ms/10);
            laplbl.appendChild(laplbltxt);
            
            // lap diveider
            var lapssect  = document.getElementById("lapssection");
            var lp = document.createElement("p");
            lapssect.appendChild(lp);
            lapssect.appendChild(laplbl);
            newlap+=1;

            m=0;    // minute
            s=0;    // second
            ms=0;   // millisecond
    }
    
    function start(){
        if(started==false){
            document.getElementById("startbtn").innerHTML=" PAUSE ";
            interval=setInterval(timer,10);
            started=true;
        }
        else{
            clearInterval(interval);
            document.getElementById("startbtn").innerHTML=" RESUME ";
            started=false;
        }
    }
    
    function reset(){
        var lapsarr=document.getElementById("lapssection").getElementsByClassName("lap");
        var l=lapsarr.length;
        var ps=lapssect.getElementsByTagName("p");
        for(i=0; i<l; i+=1){
            lapssect.removeChild(lapsarr[0]);
        }
        
        for(j=0; j<l; j+=1){
            lapssect.removeChild(ps[0]);
        }
        
        clearInterval(interval);
        m=0;    // minute
        s=0;    // second
        ms=0;   // millisecond
        newlap=1;
        started=false; 
        document.getElementById("startbtn").innerHTML=" Start ";
        document.getElementById("timer").innerHTML="Timer: ";
    }