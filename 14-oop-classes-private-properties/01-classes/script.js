class Rectangle{

  constructor(height,width){
    this.height=height
    this.width=width
  }
  area(){
    return this.height * this.width
  }
  perimeter(){
    return this.height + this.width
  }
  isSqaure(){
    return this.height == this.width
  }
  logArea(){
    console.log(this.height * this.width);
  }
  logPerimeter(){
    console.log(this.height + this.width);
  }
  logIsSquare(){
      console.log(this.height == this.width);
    }  
  }



const rect= new Rectangle(34,56)
rect.logIsSquare()
