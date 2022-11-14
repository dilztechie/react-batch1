class BoxWeight extends Box {
    constructor(height, width, depth, weight) {
        super(height, width, depth)
        this.weight = weight
    }

    boxWeightInfo = () => this.boxInfo() + ", weight:" + this.weight
}