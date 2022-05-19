const width = 800;
const height = 800;

let angle = 0;

const r = 100;
const centerX = 0;
const centerY = 0;

export function setup() {
	createCanvas(width, height);
	background(240);
}

export function draw() {
	translate(width / 2, height / 2);

	const x = r * cos(angle);
	const y = r * sin(angle);

	const t1PosX = centerX;
	const t1PosY = centerX;
	const t2PosX = centerX + x;
	const t2PosY = centerY;
	const t3PosX = centerX + x;
	const t3PosY = centerY - y;

	smooth();

	background(240);
	push();
	smooth();
	stroke(80);
	strokeWeight(1);
	noFill();
	ellipse(centerX, centerY, r * 2);
	pop();

	// noFill();
	fill(50);
	noStroke();
	triangle(t1PosX, t1PosY, t2PosX, t2PosY, t3PosX, t3PosY);

	angle += 0.01;
}
