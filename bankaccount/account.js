class BankAccount {
    constructor(acc_name, acc_balance, status) {
        // your code here
        //initialises acc
        this.acc_name=acc_name;
        this.acc_balance=acc_balance;
        this.status = status;
    }

    getBalance() {
        // your code here
        console.log("Your balance is :"+this.acc_balance);
       return this.acc_balance;
    }

     setopen() {
        // your code here
        if(this.status===null){
        this.status="active";
        console.log(" Your account has been created.")
        console.log(this);
        return "acc activated";
    }
    else{
        return "already activated";
    }
    }

    getdeposit(amount) {
        // your code here
        // adds amount to the balance
        if(typeof amount==='string'){
            return 'invalid input';
        }
        else{
        if(this.status!=="active"){
            return "account "+ this.status;
        }
        else{
        this.acc_balance+=amount;
        console.log("You have deposited "+amount+". Your balance is:"+this.acc_balance);
        return this.acc_balance;
    }
    }
    }

    getwithdraw(amount) {
        // your code here
        //subtracts amount from balance
        if(this.status==="active"){
        if(this.acc_balance<amount){
           console.log("Your acc balance is insufficient!");
            return "insufficient balance";
        }
        else if(this.acc_balance>amount){
        
        this.acc_balance-= amount;
        console.log("you have withdrawn "+amount+". Your balance is:"+this.acc_balance);
        return this.acc_balance;
    }
    else {
        this.acc_balance-= amount;
        console.log(" you are withdrawing all your money");
        return this.acc_balance;  
    }
}
else{
    console.log("Impossible to withdraw. acc closed");
    return this.status;
}
    }

    setclose(){
        this.status="closed";
        console.log("Your acc has been closed!");
        console.log(this);
        return "acc closed!"
    }
}


module.exports = new BankAccount("eve",1000000,null);
