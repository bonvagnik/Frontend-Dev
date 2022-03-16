var a=Math.floor(Math.random()*6)+1;
var x="dice"+ a +".png";
document.querySelector(".img1").setAttribute("src",x);
var b=Math.floor(Math.random()*6)+1;
var y="dice"+ b +".png";
document.querySelector(".img2").setAttribute("src",y);
if(a>b)
{
    document.querySelector("h1").textContent="1 wins";
}
else if(b>a)
{
    document.querySelector("h1").textContent="2 wins";
}
else if(b===a)
{
    document.querySelector("h1").textContent="Tie";
}