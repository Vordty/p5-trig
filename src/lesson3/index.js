const width = 800;
const height = 800;

const radiusH = 250;
const radiusV = 120;
let radius = 0;
let angle = 0;

export function setup() {
	createCanvas(width, height);
	background(240);
}

export function draw() {
	translate(width / 2, height / 2);

	// ellipse coordinates
	// const x = radiusH * cos(angle);
	// const y = -radiusV * sin(angle);

	const x = radius * cos(angle);
	const y = -radius * sin(angle);

	push();
	smooth();
	stroke(50);
	strokeWeight(5);
	point(x, y);
	pop();

	angle += 0.01;
	radius = random(4, 5) * angle;
}
