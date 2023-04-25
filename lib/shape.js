

class Shape{
    constructor(shape){
        this.shape = shape;
    }
    returnShape(){
        if(this.shape === 'circle'){

        }else if(this.shape === 'square'){

        }else if(this.shape === 'square'){

        }else{
            throw new Error('no shape selected')
        }
    }
}

module.exports = Shape;