function func() {

var f="Arial";
var u="underline"; 
var t = document.getElementById("txt").value;

elems = document.getElementsByClassName('r');

for (var i = 0; i < elems.length; i++)
{
elems[i].innerHTML += "<br>" + t;
elems[i].style.fontFamily = f;
elems[i].style.textDecoration = u;
}
}