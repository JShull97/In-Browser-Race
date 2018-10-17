function startRace() {
    document.getElementsByClassName("lakitu")[0].src = "lakitu_green.png";
    var Luigi = document.getElementById("luigi");
    var LuigiWin = document.getElementById("luigiwin");
    var Mario = document.getElementById("mario");
    var MarioWin = document.getElementById("mariowin");
    var Winner = document.getElementsByTagName("h1")[0];
  
    var posLuigi = 0;
    var posMario = 0;

    var hasWinner = false;
    LuigiWin.style.display = "none";
    MarioWin.style.display = "none";
    Winner.style.display = "none";
    
    var id = setInterval(frame, 10);


    function frame(){
        if(posLuigi >= 1200 || posMario >= 1200){
            clearInterval(id);
            return;
        }

        if(posLuigi < 1200){
            posLuigi += Math.ceil(Math.random() * 10);

            if(posLuigi >= 1200){
                if(!hasWinner){
                    hasWinner = true;
                    LuigiWin.style.display = "unset";
                    Winner.style.display = "unset";
                }
            }
            Luigi.style.left = posLuigi + "px";
        }

        if(posMario < 1200){
            posMario += Math.ceil(Math.random() * 10);
            if(posMario >= 1200){
                if(!hasWinner){
                    hasWinner = true;
                    MarioWin.style.display = "unset";
                    Winner.style.display = "unset";
                }
            }
            Mario.style.left = posMario + "px";
        }
  }
}

function reset(){
    document.getElementsByClassName("lakitu")[0].src = "lakitu_red.png";
    document.getElementById("luigiwin").style.display = "none";
    document.getElementById("mariowin").style.display = "none";
    document.getElementsByTagName("h1")[0].style.display = "none";
    document.getElementById("luigi").style.left = "0px";
    document.getElementById("mario").style.left = "0px";
}