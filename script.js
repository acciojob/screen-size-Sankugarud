//your JS code here. If required.

let div = document.getElementById("sizeInfo");
window.onresize = function(){
	div.innerHTML = `Width: ${innerWidth} and Height: ${innerHeight}`
}

