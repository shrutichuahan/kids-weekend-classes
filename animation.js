let smiles = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    noStroke();

    // Create multiple smiles
    for (let i = 0; i < 20; i++) {
        smiles.push({
            x: random(width),
            y: random(height),
            size: random(30, 60),
            xSpeed: random(1, 3),
            ySpeed: random(1, 3),
        });
    }
}

function draw() {
    background(255, 223, 186); // Light orange background

    // Update and draw each smile
    for (let smile of smiles) {
        // Update position
        smile.x += smile.xSpeed;
        smile.y += smile.ySpeed;

        // Bounce off edges
        if (smile.x > width || smile.x < 0) {
            smile.xSpeed *= -1;
        }
        if (smile.y > height || smile.y < 0) {
            smile.ySpeed *= -1;
        }

        // Draw smile
        fill(255, 105, 180); // Pink color
        ellipse(smile.x, smile.y, smile.size, smile.size);

        // Draw face details
        fill(0);
        ellipse(smile.x - smile.size / 6, smile.y - smile.size / 6, smile.size / 10, smile.size / 10); // Left eye
        ellipse(smile.x + smile.size / 6, smile.y - smile.size / 6, smile.size / 10, smile.size / 10); // Right eye
        arc(smile.x, smile.y + smile.size / 10, smile.size / 2.5, smile.size / 4, 0, PI); // Smile
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}