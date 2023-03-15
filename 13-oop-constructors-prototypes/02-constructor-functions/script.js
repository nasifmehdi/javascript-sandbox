function rectangle(length,width){
this.width=width
this.length=length
this.area = ()=>{
  return (this.length * this.width)
  }   
}

const rect1= new rectangle(20,30)
console.log(rect1.area());
console.log(rect1 instanceof rectangle);
console.log(rect1.constructor);
const rect2 = new rectangle(40,50)
rect2.color='orange'

//add
rect2.name='will'
console.log(rect2);

//delete
delete rect2.name
console.log(rect2);

//check if has property
console.log(rect2.hasOwnProperty('width'));
console.log(rect2.hasOwnProperty('name'));
const string='hello'
const stringObj= new String('hello')
//boxing
console.log(string.toUpperCase(), typeof string);
console.log(stringObj.toUpperCase(), typeof stringObj);
console.log(stringObj.valueOf(),typeof stringObj);
//Number and Function class
const num = new Number('34')
console.log(num);
const fun = new Function('x', 'console.log(x)')
fun(2)
console.log(Object.keys(rect2));
console.log(Object.values(rect2));
console.log(Object.entries(rect2));
Object.entries(rect2).forEach(entry =>{console.log(entry)})

for (let [key,value] of Object.entries(rect2)){
  if(typeof value!='function')
  console.log(key,'-',value);
}