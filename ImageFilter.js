let myform = document.getElementById('myform');
let image = document.getElementById('output');
let range = document.querySelectorAll('.slider');
myform.addEventListener('submit', function(e){
    let urlimage = document.getElementById('online');
    let urlimagevalue = urlimage.value;
    image.setAttribute('src',urlimagevalue);
    e.preventDefault();
});

for(let i=0;i<=range.length-1;i++){
    range[i].addEventListener('input', editimage);
}
function editimage(){
    let blur = document.getElementById('blur');
    let brightness = document.getElementById('brightness');
    let contrast = document.getElementById('contrast');
    let grayscale = document.getElementById('grayscale');
    let huerotate = document.getElementById('huerotate');
    let invert = document.getElementById('invert');
    let opacity = document.getElementById('opacity');
    let saturate = document.getElementById('saturate');
    let sepia = document.getElementById('sepia');
    
    let bl = blur.value;
    let br = brightness.value;
    let co = contrast.value;
    let gr = grayscale.value;
    let hr = huerotate.value;
    let iv = invert.value;
    let op = opacity.value;
    let sa = saturate.value;
    let se = sepia.value;
    
    image.style.filter = 'blur('+bl+'px) brightness('+br+'%) contrast('+co+'%) grayscale('+gr+'%) hue-rotate('+hr+'deg) invert('+iv+'%) opacity('+op+'%) saturate('+sa+'%) sepia('+se+'%)';                                              
    
}
var slider1 = document.getElementById('blur');
var value1 = document.getElementById('bl');
value1.innerHTML = slider1.value+"px";

slider1.oninput = function(){
    value1.innerHTML = this.value+"px";
}
var slider2 = document.getElementById('brightness');
var value2 = document.getElementById('br');
value2.innerHTML = slider2.value+"%";

slider2.oninput = function(){
    value2.innerHTML = this.value+"%";
}
var slider3 = document.getElementById('contrast');
var value3 = document.getElementById('co');
value3.innerHTML = slider3.value+"%";

slider3.oninput = function(){
    value3.innerHTML = this.value+"%";
}
var slider4 = document.getElementById('grayscale');
var value4 = document.getElementById('gr');
value4.innerHTML = slider4.value+"%";

slider4.oninput = function(){
    value4.innerHTML = this.value+"%";
}
var slider5 = document.getElementById('huerotate');
var value5 = document.getElementById('hr');
value5.innerHTML = slider5.value+"<sup>o</sup>";

slider5.oninput = function(){
    value5.innerHTML = this.value+"<sup>o</sup>";
}
var slider6 = document.getElementById('invert');
var value6 = document.getElementById('iv');
value6.innerHTML = slider6.value+"%";

slider6.oninput = function(){
    value6.innerHTML = this.value+"%";
}
var slider7 = document.getElementById('opacity');
var value7 = document.getElementById('op');
value7.innerHTML = slider7.value+"%";

slider7.oninput = function(){
    value7.innerHTML = this.value+"%";
}
var slider8 = document.getElementById('saturate');
var value8 = document.getElementById('sa');
value8.innerHTML = slider8.value+"%";

slider8.oninput = function(){
    value8.innerHTML = this.value+"%";
}
var slider9 = document.getElementById('sepia');
var value9 = document.getElementById('se');
value9.innerHTML = slider9.value+"%";

slider9.oninput = function(){
    value9.innerHTML = this.value+"%";
}

