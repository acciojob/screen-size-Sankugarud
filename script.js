let headingtag = document.createElement("h1");
let div = document.getElementById("sizeInfo");

window.onresize = function(){
    headingtag.innerHTML = `Width: ${innerWidth} and Height: ${innerHeight}`;
    div.appendChild(headingtag);
}
window.onresize();