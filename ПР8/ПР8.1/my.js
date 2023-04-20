c=0;
function func() {
t=document.getElementById('but');
if (c==0)
{f="red"; t.value="Желтый"; c=1; }
else {f="yellow"; t.value="Красный"; c=0;}

elems = document.getElementsByTagName('h2');

for (var i = 0; i < elems.length; i++)
{
elems[i].style.color = f;
}
}