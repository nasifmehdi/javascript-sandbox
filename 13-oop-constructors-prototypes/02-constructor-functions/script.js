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

const string='hello'
const stringObj= new String('hello')

console.log(string.toUpperCase(), typeof string);
console.log(stringObj.toUpperCase(), typeof stringObj);

const num = new Number('34')
console.log(num);
const fun = new Function('x', 'console.log(x)')
fun(2)
