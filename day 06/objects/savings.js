class Savings extends Account {
    MINIMUM_BALANCE = 1000

    constructor(id, name, balance) {
        super(id, name, "SB", balance)
    }

    withdraw = (amount) => {
        if (this.balance - amount >= this.MINIMUM_BALANCE) this.balance -= amount
        else throw Error("Insufficient Balance")
        return this.balance
    }
}