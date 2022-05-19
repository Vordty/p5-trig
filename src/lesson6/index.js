import { Picker } from "./Picker";

const width = 800;
const height = 800;
const r = 200;

let picker;

export function setup() {
	createCanvas(width, height);
	background(240);

	picker = new Picker(10, { x: 0, y: 0 });
}

export function draw() {
	background(240);
	translate(width / 2, height / 2);

	picker.draw();

	push();
	smooth();
	stroke(80);
	strokeWeight(3);
	noFill();
	ellipse(0, 0, r * 2);
	pop();
}

export function mouseDragged() {
	if (picker.hover) {
		picker.position = {
			x: mouseX - width / 2,
			y: mouseY - height / 2,
		};
	}
}
