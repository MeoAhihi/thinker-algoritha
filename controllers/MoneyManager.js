class MoneyManager {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }

    addIncome(amount, description) {
        this.balance += amount;
        this.transactions.push({ type: 'income', amount, description, date: new Date() });
    }

    addExpense(amount, description) {
        if (amount > this.balance) {
            throw new Error('Insufficient balance');
        }
        this.balance -= amount;
        this.transactions.push({ type: 'expense', amount, description, date: new Date() });
    }

    getBalance() {
        return this.balance;
    }

    getTransactions() {
        return this.transactions;
    }
}

module.exports = MoneyManager;