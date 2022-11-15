class SmartPhone extends AdvancedPhone {
    constructor(brand, model, technology, announced, dimensions, weight, build, sim, type,
        resolution, os, cpu, gpu, cardSlot, internalMemory, camera, bluetooth,
        radio, features, capacity, talkTime, price) {
        super(brand, model, technology, announced, dimensions, weight, sim, type,
            resolution, os, cardSlot, bluetooth, radio, capacity, talkTime, price)
        this.build = build
        this.cpu = cpu
        this.gpu = gpu
        this.internalMemory = internalMemory
        this.camera = camera
        this.features = features
    }

    showSmartPhone = () => this.showAdvancedPhone() + `
        <dl>
            <dt>BODY</dt>
            <dd>Build: ${this.build}</dd>
        </dl>
        <dl>
            <dt>PLATFORM</dt>
            <dd>CPU: ${this.cpu}</dd>
            <dd>GPU: ${this.gpu}</dd>
        </dl>
        <dl>
            <dt>MEMORY</dt>
            <dd>Internal: ${this.internalMemory}</dd>
        </dl>
        <dl>
            <dt>CAMERA</dt>
            <dd>Front Camera: ${this.camera[0]}</dd>
            <dd>Back Camera: ${this.camera[1]}</dd>
        </dl>
        <dl>
            <dt>FEATURES</dt>
            <dd>${this.features}</dd>
        </dl>
    `
}