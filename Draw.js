class Draw {
    constructor() {
        this.colors = ['red', 'green', 'blue'];
        this.drawResult = this.getDrawColors();
    }


    getDrawColors() {
        const drawColorsArr = [];
        for (let i = 0; i < this.colors.length; i++) {
            const index = Math.floor(Math.random() * this.colors.length);
            drawColorsArr.push(this.colors[index]);
        }
        return drawColorsArr;
    }
}