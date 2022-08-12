
function reportWindowSize() {
    var maxWidth = 768;
    var iWidth = window.innerWidth;
    const sideMenu = document.querySelector("aside");

    if(iWidth > maxWidth){
        try{
            sideMenu.style.display = "block";
        }
        catch(e){
            ;
        }
        
    }
    else{
        try{
            sideMenu.style.display = "none";
        }
        catch(e){
            ;
        }
    }

    
}

window.onresize = reportWindowSize;


