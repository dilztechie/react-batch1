class AdvancedPhone extends BasicPhone {
    constructor(brand, model, technology, announced, dimensions, weight, sim, type,
        resolution, os, cardSlot, bluetooth, radio, capacity, talkTime, price) {
        super(brand, model, technology, announced, sim, cardSlot, bluetooth, radio,
            capacity, talkTime, price)
        this.dimensions = dimensions
        this.weight = weight
        this.type = type
        this.resolution = resolution
        this.os = os
    }

    showAdvancedPhone = () => this.showBasicPhone() + `
        <dl>
            <dt>BODY</dt>
            <dd>Dimensions: ${this.dimensions}</dd>
            <dd>Weight: ${this.weight}</dd>
        </dl>
        <dl>
            <dt>DISPLAY</dt>
            <dd>Type: ${this.type}</dd>
            <dd>Resolution: ${this.resolution}</dd>
        </dl>
        <dl>
            <dt>PLATFORM</dt>
            <dd>OS: ${this.os}</dd>
        </dl>
    `
}