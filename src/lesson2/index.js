const width = 800;
const height = 800;
const radius = 120;

let angle = 0;
let centerX = 0;
let centerY = 0;

let wavePositions = [];

export function setup() {
	createCanvas(width, height);
	background(240);
}

export function draw() {
	background(240);
	translate(width / 2 - centerX + 200, height / 2);

	const x = centerX + cos(angle) * radius;
	const y = centerY - sin(angle) * radius;

	wavePositions.push({ x: x - 200, y });

	const lastElement = wavePositions[wavePositions.length - 1];
	line(lastElement.x, lastElement.y, x, y);

	push();
	smooth();
	noFill();
	stroke(80);
	strokeWeight(1);
	ellipse(centerX, centerY, radius * 2);
	stroke(50);
	strokeWeight(5);
	line(centerX, centerY, x, y);
	noStroke();
	fill(50);
	ellipse(x, y, 15);
	pop();

	wavePositions.forEach((pos, index) => {
		const prev = index > 0 ? wavePositions[index - 1] : null;

		push();
		noStroke();
		fill(50);
		stroke(50);
		strokeWeight(5);

		if (prev) line(pos.x, pos.y, prev.x, prev.y);
		pop();
	});

	angle += PI / 75;
	centerX += (PI * 2 * radius) / 75;
}
