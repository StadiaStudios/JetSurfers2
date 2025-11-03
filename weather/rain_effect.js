/**
 * Rain Effect
 * This file creates and manages rain particles for the game.
 */

class RainParticle {
    /**
     * Creates a single raindrop particle.
     * @param {number} canvasWidth - The width of the game canvas.
     * @param {number} canvasHeight - The height of the game canvas.
     */
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.reset();
    }

    /**
     * Resets the particle's position and properties to a new random state,
     * typically when it goes off-screen.
     */
    reset() {
        this.x = Math.random() * this.canvasWidth;
        this.y = Math.random() * -this.canvasHeight; // Start above the screen
        this.length = Math.random() * 20 + 10; // Raindrop length
        this.speed = Math.random() * 8 + 4;   // Fall speed
        this.opacity = Math.random() * 0.5 + 0.2; // Opacity
    }

    /**
     * Updates the particle's position.
     * Called on every frame while the rain effect is active.
     */
    update() {
        this.y += this.speed;
        // If particle goes off the bottom of the screen, reset it
        if (this.y > this.canvasHeight) {
            this.reset();
        }
    }

    /**
     * Draws the rain particle on the canvas.
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
     */
    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.strokeStyle = `rgba(174, 194, 224, ${this.opacity})`; // Bluish-white color
        ctx.lineWidth = 1;
        ctx.stroke();
    }
}

class RainEffect {
    /**
     * Manages the collection of rain particles and the effect's state.
     * @param {HTMLCanvasElement} canvas - The game's canvas element.
     */
    constructor(canvas) {
        this.canvas = canvas;
        this.particles = [];
        this.isActive = false;
        this.particleCount = 500; // Adjust this number for more/less rain
    }

    /**
     * Initializes or re-initializes the particle array.
     * Called when the effect starts or the canvas resizes.
     */
    init() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push(new RainParticle(this.canvas.width, this.canvas.height));
        }
    }

    /**
     * Activates the rain effect.
     */
    start() {
        if (this.isActive) return;
        this.isActive = true;
        // Ensure particles are initialized or resized
        if (this.particles.length === 0 || this.canvas.width !== this.particles[0].canvasWidth) {
            this.init();
        }
    }

    /**
     * Deactivates the rain effect.
     */
    stop() {
        this.isActive = false;
    }

    /**
     * Clears all particles from the array.
     * Used when the effect stops to remove rain from the screen.
     */
    clear() {
        if (this.particles.length > 0) {
            this.particles = [];
        }
    }

    /**
     * Updates all active rain particles.
     * Called on every frame from the main game loop.
     */
    update() {
        if (!this.isActive) return;

        // Check if canvas was resized
        if (this.particles.length === 0 || (this.particles[0] && this.canvas.width !== this.particles[0].canvasWidth)) {
            this.init();
        }

        for (const particle of this.particles) {
            particle.update();
        }
    }

    /**
     * Draws all active rain particles.
     * Called on every frame from the main draw function.
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context.
     */
    draw(ctx) {
        if (!this.isActive || this.particles.length === 0) return;

        for (const particle of this.particles) {
            particle.draw(ctx);
        }
    }
}
