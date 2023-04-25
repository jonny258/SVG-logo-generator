

class Shape{
    constructor(shape){
        this.shape = shape;

        this.svg = ``
    }
    returnShape(){
        if(this.shape === 'circle'){
            this.svg = 
            `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="red" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
            `
        }else if(this.shape === 'square'){
            this.svg =
            `
            <svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

  <rect x="0" y="0" width="300" height="300" fill="red" />

  <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
            `
        }else if(this.shape === 'triangle'){
            this.svg =
            `
            <svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="100,10 190,190 10,190" fill="red" />

  <text x="100" y="120" font-size="20" fill="white" text-anchor="middle">Hello, world!</text>

</svg>
            `
        }else{
            throw new Error('no shape selected')
        }
    }
}

module.exports = Shape;