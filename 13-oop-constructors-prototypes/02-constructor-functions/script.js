function rectangle(length,width){
this.width=width
this.length=length
this.area = ()=>{
  return (this.length * this.width)
}   
}
const rect= new rectangle(20,30)
console.log(rect.area());
console.log(rect instanceof rectangle);
console.log(rect.constructor);