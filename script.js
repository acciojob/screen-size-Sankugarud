//your JS code here. If required.
let headingtag = document.createElement("h1");
let div = document.getElementById("sizeInfo");
window.onresize = function(){
	headingtag.innerHTML = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
}
div.append(headingtag)
