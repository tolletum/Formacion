type BankAccount = {money: number, deposit: (value: number) => void};
let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

type Person = {name: string, bankAccount: BankAccount, hobbies: string[]};
let myself: Person = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
 
myself.bankAccount.deposit(3000);
 
console.log(myself);