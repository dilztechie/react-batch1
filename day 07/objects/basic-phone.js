class BasicPhone {
    constructor(brand, model, technology, announced, sim, cardSlot, bluetooth,
        radio, capacity, talkTime, price) {
        this.brand = brand
        this.model = model
        this.technology = technology
        this.announced = announced
        this.sim = sim
        this.cardSlot = cardSlot
        this.bluetooth = bluetooth
        this.radio = radio
        this.capacity = capacity
        this.talkTime = talkTime
        this.price = price
    }

    showBasicPhone = () => `
        <h3>Specifications of ${this.brand} ${this.model}</h3>
        <dl>
            <dt>NETWORK</dt>
            <dd>Technology: ${this.technology}</dd>
        </dl>
        <dl>
            <dt>LAUNCH</dt>
            <dd>Announced: ${this.announced}</dd>
        </dl>
        <dl>
            <dt>BODY</dt>
            <dd>SIM: ${this.sim}</dd>
        </dl>
            <dt>MEMORY</dt>
            <dd>Card Slot: ${this.cardSlot ? "Yes" : "No"}</dd>
        </dl>
        <dl>
            <dt>COMMS</dt>
            <dd>Bluetooth: ${this.bluetooth ? "Yes" : "No"}</dd>
            <dd>Radio: ${this.radio ? "Yes" : "No"}</dd>
        </dl>
        <dl>
            <dt>BATTERY</dt>
            <dd>Capacity: ${this.capacity} mAh</dd>
            <dd>Talk Time:
                ${parseInt(this.talkTime)} h 
                ${parseInt((this.talkTime - parseInt(this.talkTime)) * 100)} m</dd>
        </dl>
        <dl>
            <dt>PRICED AT</dt>
            <dd>INR ${this.price}</dd>
        </dl>
    `
}