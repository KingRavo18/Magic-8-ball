function shake(){
    document.getElementById("innerCircle").style.animation = "shake 2s";
    document.getElementById("outerCircle").style.animation = "shake 2s";
}

function eightball() {
    let message = ["Nice","You suck", " Help yourself","No lives matter","You should do it","Noooo!","Might Work","You're screwed"];
    let x = Math.round(Math.random() * 7);
    document.getElementById("innerCircle").style.animation = "none";
    document.getElementById("outerCircle").style.animation = "none";
    document.getElementById("8-ball").innerHTML = message[x];
    if (window.innerWidth >= 600) {
        document.getElementById("8-ball").style.fontSize = "80%";
        document.getElementById("8-ball").style.paddingTop = "3rem";
        document.getElementById("8-ball").style.height = "9rem";
    }else{
        document.getElementById("8-ball").style.fontSize = "60%";
        document.getElementById("8-ball").style.paddingTop = "2.5rem";
        document.getElementById("8-ball").style.height = "9rem";
    }
}