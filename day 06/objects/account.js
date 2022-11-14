// abstract class
class Account {
    constructor(id, name, type, balance) {
        if (this.constructor === Account) {
            throw new Error('Either Create an Savings / Current Account')
        }
        this.id = id
        this.name = name
        this.type = type
        this.balance = balance
    }

    toString = () => "Account [id:" + this.id + ", name:" + this.name +
        ", type:" + (this.type == 'SB' ? "Savings" : "Current") +
        ", balance:" + this.balance + "]"

    deposit = (amount) => {
        if (amount > 0) this.balance += amount
        else throw Error("Cannot Deposit Negative Amounts")
        return this.balance
    }
}