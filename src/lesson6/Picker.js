export class Picker {
	constructor(radius, angle) {
		this.radius = radius;
		this.angle = angle;
		this.hover = false;
		this.size = 15;
	}

	draw() {
		this.position = {
			x: this.radius * cos(this.angle),
			y: this.radius * sin(this.angle),
		};

		const distance = dist(this.position.x, this.position.y, mouseX - width / 2, mouseY - height / 2);

		noStroke();
		strokeWeight(5);
		fill("#f25641");

		if (distance <= this.size) {
			this.hover = true;
			cursor("pointer");
			fill("#fa7c52");
		}

		ellipse(this.position.x, this.position.y, this.size * 2);
	}
}
