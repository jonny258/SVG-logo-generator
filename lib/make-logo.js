const inquirer = require('inquirer')
const {Triangle, Square, Circle} = require('./shape')
const { writeFile } = require('fs/promises')

const shapesArr = ['circle','square','triangle']

class MakeLogo {
    constructor(){

    }
    createSVG(data){
        return writeFile('logo.svg', data)
    }
    run() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'logoText',
                message: 'What text do you want on your logo (enter up to 3 characters)'
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What color do you want your text to be enter a color keyword (OR a hexadecimal number)'
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What color do you want your logo shape to be enter a color keyword (OR a hexadecimal number)'
            },
            {
                type: 'list',
                name: 'logoShape',
                message: 'what shape do you want your logo to be',
                choices: shapesArr
            }
        ])
        .then(res => {
            switch(res.logoShape){
                case 'circle':{
                   let newLogo = new Circle(res.logoText, res.textColor, res.shapeColor)
                    return this.createSVG(newLogo.render())
                }
                case 'square':{
                    let newLogo = new Square(res.logoText, res.textColor, res.shapeColor)
                    return this.createSVG(newLogo.render())
                }
                case 'triangle':{
                    let newLogo = new Triangle(res.logoText, res.textColor, res.shapeColor)
                    return this.createSVG(newLogo.render())
                }
            }
        })
    }
}

module.exports = MakeLogo