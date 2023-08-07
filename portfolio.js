function closes(){
    console.log("hello");
    document.getElementById("animatediv").style.marginLeft = "-240px";
    document.getElementById("menu").style.opacity = "1";
    document.getElementById("close").style.opacity = "0";
    document.getElementById("navul2").style.opacity ="1";
    document.getElementById("myself").style.marginLeft = "980px";
}
function menu(){
     document.getElementById("animatediv").style.marginLeft = "0px";
     document.getElementById("menu").style.opacity = "0";
     document.getElementById("close").style.opacity = "1";
     document.getElementById("navul2").style.opacity ="0";
     document.getElementById("myself").style.marginLeft = "780px";
}
function meetmy(){
    document.getElementById("divcolor").style.marginTop = "100px";
    document.getElementById("divcolor").style.transition = "0.7s";
}
window.addEventListener('scroll', checkboxs);
checkboxs();
function checkboxs(){
    document.getElementById("section1").style.marginLeft="0px";
    document.getElementById("sectionimg").style.marginLeft="260px";
    document.getElementById("section2").style.marginLeft="0px";
}
function order(){
    document.getElementById("boxs").style.marginLeft = "0px";
}
function project(){
    document.getElementById("net").style.marginLeft = "30px";
    document.getElementById("net").style.transition = "0.8s";
}