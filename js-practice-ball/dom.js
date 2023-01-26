var area = document.getElementById("area");
var ball = document.getElementById("ball");

//outer-area csss
area.style.height = "500px";
area.style.width = "200px";
area.style.margin = "0 auto";
area.style.border = "1px solid black";
area.style.position = "relative";
area.style.backgroundColor = "#efefef";
area.style.marginTop = "40px";

//ball css
ball.style.height = "75px";
ball.style.width = "75px";
ball.style.backgroundColor = "orangered";
ball.style.borderRadius = "50%";
ball.style.position = "absolute";
ball.style.left = "50%";
ball.style.transform = "translate(-50%)";

//animation stuffs
var y =  0;
var up = true;
var down = false;

function bounce(){
    if(y == 0){
        up = true;
        down = false;
    }
    else if(y == 85){
        up = false;
        down = true;
    }

    if(up == true){
        y++;
    }
    if(down == true){
        y--;
    }
    ball.style.top = y + "%";
    window.requestAnimationFrame(bounce);
}
window.requestAnimationFrame(bounce);