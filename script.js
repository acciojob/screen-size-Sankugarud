//your JS code here. If required.

let h1 = document.getElementById("h1");
window.onresize = function(){
	h1.innerHTML = `Width: ${win.innerWidth} and Height: ${win.innerHeight}`
}

