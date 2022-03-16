var l = document.querySelectorAll(".drum").length;
for( var i=0;i<l;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var b= this.innerHTML;
        playSound(b);
        buttonAnimation(b);
    });
}
document.addEventListener("keypress",function(x){
    playSound(x.key);
    buttonAnimation(x.key);
});
function playSound(b)
{
    switch (b) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
    
        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
    
        case "s":
          var tom3 = new Audio('sounds/tom-3.mp3');
          tom3.play();
          break;
    
        case "d":
          var tom4 = new Audio('sounds/tom-4.mp3');
          tom4.play();
          break;
    
        case "j":
          var snare = new Audio('sounds/snare.mp3');
          snare.play();
          break;
    
        case "k":
          var crash = new Audio('sounds/crash.mp3');
          crash.play();
          break;
    
        case "l":
          var kick = new Audio('sounds/kick-bass.mp3');
          kick.play();
          break;
    
    
        default: console.log(b);
    } 
}
function buttonAnimation(k)
{
    var but= document.querySelector("."+k);
    but.classList.add("pressed");
    setTimeout(function(){
        but.classList.remove("pressed");
    },100);
}