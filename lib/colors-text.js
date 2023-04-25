
class ColorText{
    constructor(textColor, shapeColor, logoText){
        this.textColor = textColor
        this.shapeColor = shapeColor
        this.logoText = logoText
    }

    underThree(){
        if(this.logoText.length >= 3){
            throw new Error('text is too long')
        }
    }
}

module.exports = ColorText;