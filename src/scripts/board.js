//document.addEventListener("DOMContentLoaded", function(){
  // Handler when all assets (including images) are loaded
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	const hitCanvas = document.createElement('canvas');
	const hitCtx = hitCanvas.getContext('2d');

	const colorsHash = {};
//});

function getRandomColor() {
 const r = Math.round(Math.random() * 255);
 const g = Math.round(Math.random() * 255);
 const b = Math.round(Math.random() * 255);
 return `rgb(${r},${g},${b})`;
}

function createCircle(idx,x,y,mode) {
	switch(mode) {
		case 'field':
			colorInner = 'rgb(255,255,255)';
			colorOuter = 'rgb(0,0,0)';
			break;
		case y:
			// code block
			break;
		default:
		// code block
	}
	 
	return {
		id: idx, x: x, y: y, colorInner: colorInner, colorOuter: colorOuter
	};
 }
 
const circleFields = [
	{createCircle(1,6,0,'field')},
	{createCircle(2,6,1,'field')},
	{createCircle(3,6,2,'field')},
	{createCircle(4,6,3,'field')},
	{createCircle(5,6,4,'field')},
	{createCircle(6,7,4,'field')},
	{createCircle(7,8,4,'field')},
	{createCircle(8,9,4,'field')},
	{createCircle(9,10,4,'field')},
	{createCircle(10,10,5,'field')},
	{createCircle(11,10,6,'field')},
	{createCircle(12,9,6,'field')},
	{createCircle(13,8,6,'field')},
	{createCircle(14,7,6,'field')},
	{createCircle(15,6,6,'field')},
	{createCircle(16,6,7,'field')},
	{createCircle(17,6,8,'field')},
	{createCircle(18,6,9,'field')},
	{createCircle(19,6,10,'field')},
	{createCircle(20,5,10,'field')}
]

circleFields.forEach(circleFields => {
  ctx.beginPath();
  ctx.arc(circleFields.x*50, circleFields.y*50, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'rgb(0,0,0)';//circle.color;
  ctx.fill();
  
  hitCtx.beginPath();
  hitCtx.arc(circleFields.x*50, circleFields.y*50, 20, 0, 2 * Math.PI, false);
  hitCtx.fillStyle = 'rgb(0,0,0)';// = circle.colorKey;
  hitCtx.fill();
});











const circles = [{
  id: '1', x: 40, y: 40, radius: 10, color: 'rgb(255,0,0)'
}, {
  id: '2', x: 100, y: 70, radius: 10, color: 'rgb(0,255,0)'
}];

circles.forEach(circle => {
	while(true) {
     const colorKey = getRandomColor();
     if (!colorsHash[colorKey]) {
        circle.colorKey = colorKey;
        colorsHash[colorKey] = circle;
        return;
     }
  }
});

circles.forEach(circle => {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = circle.color;
  ctx.fill();
  
  hitCtx.beginPath();
  hitCtx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
  hitCtx.fillStyle = circle.colorKey;
  hitCtx.fill();
});

function hasSameColor(color, shape) {
  return shape.color === color;
}

canvas.addEventListener('click', (e) => {
  const mousePos = {
    x: e.clientX - canvas.offsetLeft,
    y: e.clientY - canvas.offsetTop
  };
  const pixel = hitCtx.getImageData(mousePos.x, mousePos.y, 1, 1).data;
  const color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
  const shape = colorsHash[color];
  if (shape) {
     alert('click on circle: ' + shape.id);
  }
 });
