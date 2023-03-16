class App{
  constructor(){
    this.name='localhost'
    document.querySelector('button').addEventListener
    ('click',this.logName.bind(this))
  }
  

  logName(){
    console.log(this.name);
  }
}

const app= new App()
