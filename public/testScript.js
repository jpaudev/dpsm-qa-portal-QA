
function reportWindowSize() {
    var maxWidth = 768;
    var iWidth = window.innerWidth;
    var iHeight = window.innerHeight;

    var oWidth = window.outerWidth;
    var oHeight = window.outerHeight;

    if(iWidth > maxWidth){
        // document.getElementById("demo1").innerHTML = "Julius";
        document.getElementById("sidebar").style.display = "block";
    }
    else{
        // document.getElementById("demo1").innerHTML = iWidth + " " + iHeight + ": " + oWidth + " " + oHeight;
        document.getElementById("sidebar").style.display = "none";
    }

    
}

window.onresize = reportWindowSize;