
function reportWindowSize() {
    var maxWidth = 768;
    var iWidth = window.innerWidth;
    var iHeight = window.innerHeight;

    var oWidth = window.outerWidth;
    var oHeight = window.outerHeight;
    const sideMenu = document.querySelector("aside");

    if(iWidth > maxWidth){
        document.getElementById("demo1").innerHTML = "Julius";
        sideMenu.style.display = "block";
    }
    else{
        try{
            document.getElementById("demo1").innerHTML = iWidth + " " + iHeight + ": " + oWidth + " " + oHeight;
            sideMenu.style.display = "none";
        }
        catch(e){
            alert("Error: " + e.description );
        }
    }

    
}

window.onresize = reportWindowSize;


