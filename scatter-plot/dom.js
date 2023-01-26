var area = document.getElementById("plot-area");

//outer-area css
area.style.height = "100vh";
area.style.width = "100%";
area.style.margin = "0 auto";
area.style.border = "1px solid black";
area.style.backgroundColor = "#efefef";
area.style.position = "relative";


addEventListener('click', (event) => {
	let xM = event.clientX, yM = event.clientY;
	var pointObj = new Dot(xM, yM);
	area.appendChild(pointObj.element);
});

//dot funct and css
function Dot(x,y){
	this.x = x;
	this.y = y;

	this.element = document.createElement("div");

	this.element.className = "dots";
	this.element.style.height = "15px";
	this.element.style.width = "15px";
	this.element.style.borderRadius = "50%";
	this.element.style.position = "absolute";
	this.element.style.backgroundColor = "orangered";
	this.element.style.transform = "translate(-50%, -50%)";

	this.element.style.left = x + 'px';
	this.element.style.top = y + 'px';
}
