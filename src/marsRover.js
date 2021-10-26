class Rover {
    constructor(upperX, upperY) {
        this.upperX = upperX;
        this.upperY = upperY;
        this.N = 1;
        this.E = 2;
        this.S = 3;
        this.W = 4;
        this.x = 0;
        this.y = 0;
        this.facing = this.N;
    }

    setPosition(x, y, dir) {
        this.x = x;
        this.y = y;
        const newDir = dir?.toUpperCase();
        if (newDir === 'N') {
            this.facing = 1;
        } else if (newDir === 'E') {
            this.facing = 2;
        } else if (newDir === 'S') {
            this.facing = 3;
        } else if (newDir === 'W') {
            this.facing = 4;
        }
    }

    printPosition() {
        let direction;
        if (this.facing === 1) {
            direction = 'N';
        } else if (this.facing === 2) {
            direction = 'E';
        } else if (this.facing === 3) {
            direction = 'S';
        } else if (this.facing === 4) {
            direction = 'W'
        }
        return (this.x + " " + this.y + " " + direction)
    }

    leftTurn() {
        this.facing = (this.facing - 1) < this.N ? this.W : this.facing - 1;
    }

    rightTurn() {
        this.facing = (this.facing + 1) > this.W ? this.N : this.facing + 1;
    }

    move() {
        if (this.facing === this.N) {
            this.y++;
        } else if (this.facing === this.E) {
            this.x++;
        } else if (this.facing === this.S) {
            this.y--;
        } else if (this.facing === this.W) {
            this.x--;
        }
    }

    processRover(commands) {
        const newCommand = commands?.toUpperCase()
        for (let idx = 0; idx < newCommand.length; idx++) {
            this.processMovement(newCommand.charAt(idx));
        }
    }

    processMovement(command) {
        if (command === 'L') {
            this.leftTurn();
        } else if (command === 'R') {
            this.rightTurn();
        } else if (command === 'M') {
            this.move();
        } else {
            console.log('Your input is not a Mars language');
            process.exit();
        }
    }
}

export default Rover
