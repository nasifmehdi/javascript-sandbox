class Person{
  constructor(firstName,lastName){
    this._firstName=firstName
    this._lastName=lastName
  }
  capitalizeFirstLetter(value){
    return (value.charAt(0).toUpperCase()+ value.slice(1))

  }
  get firstName(){
    return this.capitalizeFirstLetter(this._firstName)
  }
  set firstName(string){
    this._firstName=string
  }
  get lastName(){
    return this.capitalizeFirstLetter(this._lastName)
  }
  set lastName(string){
    this._lastName=string
  }
}

const person1=new Person('john','cena')
console.log(person1.firstName,person1.lastName);