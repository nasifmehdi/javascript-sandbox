function Player(name,lvl,points){
 this.name=name
 this.lvl=1
 this.points=0
 this.gainXP=(number)=>{
  this.points=this.points+number
  if(this.points>=10){
  this.lvl=this.lvl+1
  this.points=this.points-10
  }
 }
}
Player.prototype.describe=function(){
 console.log(`name: ${this.name} 
lvl:${this.lvl} 
points:${this.points}`
            );
}

let player1=new Player('bob')
let player2=new Player('alice')

player1.gainXP(6)
player1.gainXP(6)
player1.gainXP(6)
player1.gainXP(6)
player1.gainXP(6)
player1.gainXP(6)
player1.gainXP(6)
player1.gainXP(6)
player1.gainXP(6)
player1.gainXP(6)
player1.gainXP(6)
player1.gainXP(6)
player1.gainXP(6)
player1.gainXP(6)
player1.gainXP(6)
player1.gainXP(6)
//console.log(player1.lvl);
console.log(player1.describe());