

class Shape{ // shape is the parent constructor, i use this so that I don't have to repeat code 
    constructor(logoText, textColor, shapeColor){
        this.logoText = logoText;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape{ //circle is just a copy of shape but jsut with extra functionality
    constructor(logoText, textColor, shapeColor){
        super(logoText, textColor, shapeColor); //pulls in the items from the Shape class
    }
    render(){ //this render function is what differs them, it has the correct things for a circle
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.textColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.shapeColor}">${this.logoText}</text>
      
      </svg>`
    }
}

class Square extends Shape{
    constructor(logoText, textColor, shapeColor){
        super(logoText, textColor, shapeColor);
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="0" y="0" width="200" height="200" fill="${this.textColor}" />
      
        <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.shapeColor}">${this.logoText}</text>
      
      </svg>`
    }
}

class Triangle extends Shape{
    constructor(logoText, textColor, shapeColor){
        super(logoText, textColor, shapeColor);
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="${this.textColor}" />
      
        <text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.shapeColor}">${this.logoText}</text>
      
      </svg>`
    }
}

module.exports = {Triangle, Square, Circle} //exports so they can be used in the make-logo file