import { Picker } from "./Picker";

const width = 800;
const height = 800;
const r = 200;

let picker;

export function setup() {
	createCanvas(width, height);
	background(240);

	picker = new Picker(r + 75, -PI / 4);
}

export function draw() {
	background(240);
	translate(width / 2, height / 2);

	picker.draw();

	push();
	strokeWeight(2);
	stroke(150);
	line(-r, 0, r, 0);
	line(0, -r, 0, r);
	pop();

	push();
	smooth();
	stroke(80);
	strokeWeight(3);
	noFill();
	ellipse(0, 0, r * 2);
	pop();

	push();
	noFill();
	stroke(150);
	strokeWeight(2);
	arc(0, 0, r / 2, r / 2, picker.angle, 0);
	pop();

	drawAngleTexts();
	drawValueTexts();

	// draw triangle
	const x = (r - 4) * cos(picker.angle);
	const y = (r - 4) * sin(picker.angle);

	strokeWeight(5);
	stroke("#de5a35");
	line(0, 0, x, y);

	stroke("#5aa65d");
	line(0, 0, x, 0);

	stroke("#e6b52e");
	line(x, 0, x, y);
}

export function mouseDragged() {
	if (picker.hover) {
		const v1 = createVector(mouseX - width / 2, mouseY - height / 2);
		const v2 = createVector(picker.position.x, picker.position.y);

		picker.angle -= v1.angleBetween(v2) / 20;
	}
}

export function mouseReleased() {
	picker.hover = false;
	cursor("auto");
}

function drawAngleTexts() {
	for (let i = 0; i < 360; i += 15) {
		const textR = r + 25;
		const x = textR * cos(radians(i));
		const y = -textR * sin(radians(i));

		fill(25);
		textSize(16);
		textAlign(CENTER, CENTER);
		textStyle(BOLD);
		text(i + "°", x, y);
	}

	const x = r * cos(picker.angle);
	const y = r * sin(picker.angle);
	fill(25);
	textSize(16);
	textAlign(CENTER, CENTER);
	textStyle(BOLD);
	text(-(Math.round(degrees(picker.angle)) % 360) + "°", x / 1.5, y / 3);
}

function drawValueTexts() {
	const height1 = -height / 2 + 50;
	const height2 = -height / 2 + 80;

	push();
	fill("#e6b52e");
	ellipse(-45, height1, 10);
	fill("#5aa65d");
	ellipse(-45, height2, 10);
	pop();

	fill(25);
	textSize(16);
	textAlign(LEFT);
	textStyle(BOLD);

	const roundTo = 100;
	text("sin(θ) = " + -Math.round(sin(picker.angle) * roundTo) / roundTo, -30, height1);
	text("cos(θ) = " + Math.round(cos(picker.angle) * roundTo) / roundTo, -30, height2);
}
