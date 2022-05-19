export class Picker {
	constructor(radius, position) {
		this.radius = radius;
		this.position = position;
		this.hover = false;
	}

	draw() {
		console.log("HEY", this.position);
		const distance = dist(this.position.x, this.position.y, mouseX - width / 2, mouseY - height / 2);

		if (distance <= this.radius) {
			this.hover = true;
			stroke("white");
			strokeWeight(5);
			fill("blue");
		} else {
			stroke("white");
			strokeWeight(5);
			fill("red");
		}

		ellipse(this.position.x, this.position.y, this.radius * 2);
	}
}
