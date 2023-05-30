//your JS code here. If required.
let headingtag = document.createElement("h1");
let div = document.getElementById("sizeinfo");
window.onresize = function(){
	headingtag.innerHTML = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
}
div.append(headingtag);
