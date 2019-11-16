    class Position{
        constructor(xPos, yPos, orientation, xLimit, yLimit) {
            this.xPosPrev = xPos;
            this.yPosPrev = yPos;
            this.orientationPrev = orientation;
            this.xPos = xPos;
            this.yPos = yPos;
            this.orientation = orientation;
            this.xLimit = xLimit;
            this.yLimit = yLimit;
        }

        place(x, y, orientation) {
        	var intX = parseInt(x, 10);
        	var intY = parseInt(y, 10);

            if (this.checkPosition(intX,intY)) {
            	this.savePreviousPosition();
                this.xPos = intX;
                this.yPos = intY;
                this.orientation = orientation;
            }
            return this.getCurrentPosition();
        }

        savePreviousPosition() {
            this.xPosPrev = this.xPos;
            this.yPosPrev = this.yPos;
            this.orientationPrev = this.orientation;
        }

        move() {
            var newX;
            var newY;
            switch(this.orientation){
                case NORTH:
                    newY = this.yPos + 1;
                    newX = this.xPos;
                    if(this.checkPosition(newX,newY)) {
                        this.savePreviousPosition();
                        this.xPos = newX;
                        this.yPos = newY;
                    }
                    break;
                case SOUTH:
                    newY = this.yPos - 1;
                    newX = this.xPos;
                    if(this.checkPosition(newX,newY)) {
                        this.savePreviousPosition();
                        this.xPos = newX;
                        this.yPos = newY;
                    }
                    break;
                case EAST:
                    newX = this.xPos + 1;
                    newY = this.yPos;
                    if(this.checkPosition(newX,newY)) {
                        this.savePreviousPosition();
                        this.xPos = newX;
                        this.yPos = newY;
                    }
                    break;
                case WEST:
                    newX = this.xPos - 1;
                    newY = this.yPos;
                    if(this.checkPosition(newX,newY)) {
                        this.savePreviousPosition();
                        this.xPos = newX;
                        this.yPos = newY;
                    }
                    break;
            }
            return this.getCurrentPosition();
        }

        left() {
            switch(this.orientation){
                case NORTH:
                    this.savePreviousPosition();
                    this.orientation = WEST;
                    break;
                case SOUTH:
                    this.savePreviousPosition();
                    this.orientation = EAST;
                    break;
                case EAST:
                    this.savePreviousPosition();
                    this.orientation = NORTH;
                    break;
                case WEST:
                    this.savePreviousPosition();
                    this.orientation = SOUTH;
                    break;
            }
            return this.getCurrentPosition();
        }

        right() {
            switch(this.orientation){
                case NORTH:
                    this.savePreviousPosition();
                    this.orientation = EAST;
                    break;
                case SOUTH:
                    this.savePreviousPosition();
                    this.orientation = WEST;
                    break;
                case EAST:
                    this.savePreviousPosition();
                    this.orientation = SOUTH;
                    break;
                case WEST:
                    this.savePreviousPosition();
                    this.orientation = NORTH;
                    break;
            }
            return this.getCurrentPosition();
        }

        getCurrentPosition() {
            return {
                xPosPrev: this.xPosPrev,
                yPosPrev: this.yPosPrev,
                orientationPrev: this.orientationPrev,
                
                xPos: this.xPos,
                yPos: this.yPos,
                orientation: this.orientation
            }
        }

        checkPosition(x, y)
        {
            return (x <= this.xLimit && x >= 0 && y >= 0 && y <= this.yLimit);
        }

        report() {
            console.log("====");
            console.log(this.xPosPrev+" "+this.yPosPrev+" "+this.orientationPrev);
            console.log(this.xPos+" "+this.yPos+" "+this.orientation);
            console.log("====");
        }
    }