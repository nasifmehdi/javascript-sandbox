class Wallet{
 constructor(){
    this._balance=0
    this._transactions=[]
 }
 deposit(amount){
  this._balance=this._balance+amount
  this._transactions.push({
    _type:'deposit',
    _amount:amount
 })
  console.log('deposited: '+amount);
  
 }
 withdraw(amount){
    if(this._balance < amount){
        console.log(amount +' is more than balance' );
        return;
    }
    
    this._balance=this._balance-amount
    this._transactions.push({
        _type:'withdrawn',
        _amount:amount
     })
    console.log('withdrawn: '+amount);
 
 }
 get balance(){
    return 'balance:'+this._balance
 }
 get transactions(){
    return this._transactions
 }
 
}

const wallet=new Wallet()
console.log(wallet.deposit(500));
console.log(wallet.balance);
console.log(wallet.withdraw(200));
console.log(wallet.balance);
console.log(wallet.transactions);