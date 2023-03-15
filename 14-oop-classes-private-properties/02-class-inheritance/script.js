class Shape{
 
  constructor(name){
    this.name=name
  }
  name(){
    return this.name
  }
  logName(){
    console.log(this.name);
  }
}

class Rectangle extends Shape{
   constructor(name,height,width){
    super(name)
    this.height=height
    this.width=width
   }
  area(){
    return this.height * this.width
  }
  isSquare(){
    return this.height == this.width
  }
  logName(){
    console.log('inheritence' + this.name);
  }
}

const rect= new Rectangle('rerw',40,50)
const shape= new Shape('shasfas')
console.log(rect.logName());