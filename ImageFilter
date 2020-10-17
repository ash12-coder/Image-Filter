<?php
session_start();

if(!isset($_SESSION['username'])){
echo "you are loged out";
 header('location:login.php');
}

?>

<!DOCTYPE html>
<html>

<head>
    <title>Image Filter Editor</title>
    <link href="ImageFilter.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://kit.fontawesome.com/yourcode.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
        var loadfile = function(event) {
            var image = document.getElementById('output');
            image.src = URL.createObjectURL(event.target.files[0]);
        }
    </script>
</head>

<body>
    <nav>
        <h3>Image Editor</h3>
        <h3>Image Editor</h3>
        <a href="login.php">LogOut</a>
    </nav>
    <div class="inputfile" id="inputfile">
        <form id="myform">

            <input type="text" id="online" placeholder="   Enter Image Url">
            <button type="submit">&#x260C</button>
        </form>
        <div class="browse">
            <input type="file" accept="image/*" name="image" id="file" onchange="loadfile(event)" placeholder="Upload file" />
            <label for="file" id="label" onmouseover="show()" onmouseout="hide()">Browse</label>
        </div>
    </div>

    <div class="canvas" id="canvas">
        <!--- container which contain the image--->
        <img id="output">
        <p id="heading"></p>
    </div>
    <form id="slider">
        <h2>FILTERs</h2>
        <main id="fill">
            <div class="brightness" id="bri">
                <label>blur</label><br>
                <input type="range" max="100" min="0" value="0" step="1" class="slider" id="blur"><span id="bl"></span>
            </div>
            <div class="brightness">
                <label>brightness</label>
                <input type="range" max="500" min="0" value="100" step="1" class="slider" id="brightness"><span id="br"></span>
            </div>

            <div class="brightness">
                <label>contrast</label><br>
                <input type="range" max="500" min="0" value="100" step="1" class="slider" id="contrast"><span id="co"></span>
            </div>

            <div class="brightness">
                <label>grayscale</label>
                <input type="range" max="100" min="0" value="0" step="1" class="slider" id="grayscale"><span id="gr"></span>
            </div>

            <div class="brightness">
                <label>hue-rotate</label>
                <input type="range" max="360" min="0" value="0" step="1" class="slider" id="huerotate"><span id="hr"></span>
            </div>

            <div class="brightness">
                <label>invert</label><br>
                <input type="range" max="100" min="0" value="0" step="1" class="slider" id="invert"><span id="iv"></span>
            </div>

            <div class="brightness">
                <label>opacity</label><br>
                <input type="range" max="100" min="0" value="100" step="1" class="slider" id="opacity"><span id="op"></span>
            </div>

            <div class="brightness">
                <label>saturate</label><br>
                <input type="range" max="500" min="0" value="100" step="1" class="slider" id="saturate"><span id="sa"></span>
            </div>

            <div class="brightness">
                <label>sepia</label><br>
                <input type="range" max="100" min="0" value="0" step="1" class="slider" id="sepia"><span id="se"></span>
            </div>

        </main>
    </form>
    <main id="tool">
        <div class="tools">
            <button onclick="rotate()" onmouseover="p1()" onmouseout="np1()"><img src="icons8-rotate-right-24.png"></button>
            <button onclick="antirotate()" onmouseover="p2()" onmouseout="np2()"><img src="icons8-rotate-left-24.png"></button>
            <button onclick="flipx()" onmouseover="p3()" onmouseout="np3()"><img src="icons8-flip-vertical-50.png"></button>
            <button onclick="flipy()" onmouseover="p4()" onmouseout="np4()"><img src="icons8-flip-horizontal-50.png"></button>
            <p id="rotateright">Rotate 90<sup>o</sup>Right</p>
            <p id="rotateleft">Rotate 90<sup>o</sup>Letf</p>
            <p id="flipx">FlipX</p>
            <p id="flipy">FlipY</p>
        </div>

    </main>
    <div class="text">
        <h2>TEXT EFFECTs</h2>
        <main class="texts">
            <div class="textinput">
                <label>Enter Text </label><br>
                <input type="text" min="!" max="20" placeholder="TEXT" id="text">
            </div>
            <div class="fontsize">
                <label>Font-size</label><br>
                <input type="range" min="1" max="100px" step="1" value="20" id="fontsize" class="ab">
                <span id="sizes"></span>
            </div>
            <div class="fontweight">
                <label>Font-weight</label><br>
                <input type="range" min="100" max="1000" step="1" value="500" id="fontweight" class="ab">
            <span id="weights"></span>
            </div>
            <div class="marginleft">
                <label>Move Left or Right</label>
                <input type="range" min="0" max="280" step="1" value="0" id="marginleft" class="ab">
            <span id="lefts"></span>
            </div>
            <div class="margintop">
                <label>Move top or Bottom</label>
                <input type="range" min="-300" max="-25" step="1" value="-25" id="margintop" class="ab">
            <span id="tops"></span>
            </div>
            <div class="color">
                <label>Text Color</label>
                <input type="color" id="color">
            </div>
            <div class="letter">
               <label>Letter Space</label><br>
                <input type="range" min="-50" max="50" step="1" value="0" id="letter" class="ab">
        <span id="letterspace"></span>
            </div>
            <div class="word">
               <label>Word-space</label><br>
                <input type="range" min="-5" max="3" value="0" step="0.1" id="word" class="ab" >
            <span id="wordspace"></span>
            </div><br>
            <div class="textshadow">
               <div  id="textshadow">
                <label>Shadow</label><br>
                </div>
                <div class="leftorright">
                <label>Left or Right</label>
                <input type="number" value="0" id="leftshadow">
                </div>
                <div class="toporbottom">
                <label>Top or Bottom</label>
                <input type="number" value="0" id="topshadow">
                </div>
                <div class="blurs">
                <label id="blurs">Blur</label>
                <input type="number" value="0" id="blurshadow">
                </div>
                <div class="colors">
                <label id="colors">Color</label>
                <input type="color" id="colorshadow">
                </div>
            </div>
<div class="butt">
    <button id="butt" onclick="apply()">Apply</button>
    <button id="butto" onclick="erase()">Earase</button>
</div>        </main>
    </div>
    <script src="ImageFilter.js"></script>
    <script src="style.js"></script>
</body>

</html>