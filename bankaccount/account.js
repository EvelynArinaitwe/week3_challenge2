class BankAccount {
    constructor(acc_name, acc_balance) {
        // your code here
        //initialises acc
        this.acc_name=acc_name;
        this.acc_balance=acc_balance;
    }

    getBalance() {
        // your code here
       return this.acc_balance;
    }

    open(name,bal) {
        // your code here
        B =new BankAccount(name,bal);
        return B;
    }

    deposit(amount) {
        // your code here
        // adds amount to the balance
        this.acc_balance+=amount;
        return this;
    }

    withdraw(amount) {
        // your code here
        //subtracts amount from balance
        if(this.acc_balance<amount){
           let w= console.log("insufficient balance");
            return w;
        }
        else if(this.acc_balance>amount){
        
        this.acc_balance-= amount;
        return this;
    }
    else {
        this.acc_balance-= amount;
        let w= console.log(" you are withdrawing all your money");
        return w;  
    }
    }

    close(){
        B=null;
    }
}

B= new BankAccount('evelyn', 1000000);
B.open("kikie",1500)
console.log(B);
console.log(B.deposit(500));
console.log(B.withdraw(2000));
B.close();
console.log("account is closed");

//B.getBalance;
