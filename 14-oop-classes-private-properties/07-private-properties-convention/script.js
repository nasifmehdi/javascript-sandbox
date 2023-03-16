class Wallet{
    #balance
    #transactions
 constructor(){
    this.#balance=0
    this.#transactions=[]
 }
 deposit(amount){
  this.#balance=this.#balance+amount
  this.#transactions.push({
    _type:'deposit',
    _amount:amount
 })
  console.log('deposited: '+amount);
  
 }
 withdraw(amount){
    if(this.#balance < amount){
        console.log(amount +' is more than balance' );
        return;
    }
    
    this.#balance=this.#balance-amount
    this.#transactions.push({
        _type:'withdrawn',
        _amount:amount
     })
    console.log('withdrawn: '+amount);
 
 }
 get balance(){
    return 'balance:'+this.#balance
 }
 get transactions(){
    return this.#transactions
 }
 
}

const wallet=new Wallet()
console.log(wallet.deposit(500));
console.log(wallet.balance);
console.log(wallet.withdraw(200));
console.log(wallet.balance);
console.log(wallet.transactions);