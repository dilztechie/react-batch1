class Current extends Account {
    MINIMUM_BALANCE = 5000

    constructor(id, name, balance) {
        super(id, name, "CC", balance)
    }

    withdraw = (amount) => {
        if (this.balance - amount >= this.MINIMUM_BALANCE) this.balance -= amount
        else throw Error("Insufficient Balance")
        return this.balance
    }
}