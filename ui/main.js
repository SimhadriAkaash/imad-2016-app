console.log('Loaded!');
//Change the text of the main-text div
var element= document.getElementById('main-text');
element.innerHTML='New Value in JS';
//move the image

var img=document.getElementById('madi');
img.onclick=function()
{
    img.style.marginright='100px';
}