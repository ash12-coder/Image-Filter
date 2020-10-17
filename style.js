function rotate(){
document.getElementById("output").style.transform += "rotate(90deg)";    
}
function antirotate(){
    document.getElementById("output").style.transform += "rotate(-90deg)";
}
function flipx(){
    document.getElementById("output").style.transform += "scaleX(-1)";
}
function flipy(){
    document.getElementById("output").style.transform += "scaleY(-1)";
}
function p1(){
    document.getElementById('rotateright').style.visibility = "visible";
}
function np1(){
        document.getElementById('rotateright').style.visibility = "hidden";
}
function p2(){
    document.getElementById('rotateleft').style.visibility = "visible";
}
function np2(){
        document.getElementById('rotateleft').style.visibility = "hidden";
}
function p3(){
    document.getElementById('flipx').style.visibility = "visible";
}
function np3(){
        document.getElementById('flipx').style.visibility = "hidden";
}
function p4(){
    document.getElementById('flipy').style.visibility = "visible";
}
function np4(){
        document.getElementById('flipy').style.visibility = "hidden";
}
function apply(){
    var text = document.getElementById('text');
    var size = document.getElementById('fontsize');
    var weight = document.getElementById('fontweight');
    var left = document.getElementById('marginleft');
    var top = document.getElementById('margintop');
    var color = document.getElementById('color');
    var letter = document.getElementById('letter');
    var word = document.getElementById('word');
    var leftshadow = document.getElementById('leftshadow');
    var topshadow = document.getElementById('topshadow');
    var blurshadow = document.getElementById('blurshadow');
    var colorshadow = document.getElementById('colorshadow');
    document.getElementById('heading').style.visibility = "visible";
    document.getElementById('heading').innerHTML = text.value;
    document.getElementById('heading').style.fontSize = size.value+"px";
     document.getElementById('heading').style.fontWeight = weight.value;
     document.getElementById('heading').style.marginLeft = left.value+"px";
     document.getElementById('heading').style.marginTop = top.value+"px";
     document.getElementById('heading').style.color = color.value;
     document.getElementById('heading').style.textShadow = leftshadow.value+"px"+" "+topshadow.value+"px"+" "+blurshadow.value+"px"+" "+colorshadow.value;
    document.getElementById('heading').style.letterSpacing = letter.value+"px";
    document.getElementById('heading').style.wordSpacing = word.value+"em";
}
function erase(){
    document.getElementById('heading').style.visibility = "hidden";
}
var slider10 = document.getElementById('fontsize');
var value10 = document.getElementById('sizes');
value1.innerHTML = slider10.value+"px";

slider10.oninput = function(){
    value10.innerHTML = this.value+"px";
}
var slider11 = document.getElementById('fontweight');
var value11 = document.getElementById('weights');
value11.innerHTML = slider11.value;

slider11.oninput = function(){
    value11.innerHTML = this.value;
}
var slider12 = document.getElementById('marginleft');
var value12 = document.getElementById('lefts');
value12.innerHTML = slider12.value+"px";

slider12.oninput = function(){
    value12.innerHTML = this.value+"px";
}
var slider13 = document.getElementById('margintop');
var value13 = document.getElementById('tops');
value13.innerHTML = slider13.value+"px";

slider13.oninput = function(){
    value13.innerHTML = this.value+"px";
}
var slider14 = document.getElementById('letter');
var value14 = document.getElementById('letterspace');
value14.innerHTML = slider14.value+"px";

slider14.oninput = function(){
    value14.innerHTML = this.value+"px";
}
var slider15 = document.getElementById('word');
var value15 = document.getElementById('wordspace');
value15.innerHTML = slider15.value+"em";

slider15.oninput = function(){
    value15.innerHTML = this.value+"em";
}
