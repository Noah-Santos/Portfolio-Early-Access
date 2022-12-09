function showDiv(text){
    document.getElementById(text).style.display="flex";
    document.getElementById(text).style.alignItems="stretch";
    document.getElementById(text).style.zIndex=1;
    console.log("change");
}
function testing(){
    console.log("success");
}
function closePage(text){
    document.getElementById(text).style.display="none";
    console.log("success");
}