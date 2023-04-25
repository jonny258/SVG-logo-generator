const inquirer = require('inquirer') //pulls in inquirer
const {Triangle, Square, Circle} = require('./shape') //this uses destructuring assignment to keep the code dry
const { writeFileSync } = require('fs') // this uses destructuring assignment to keep the code dry, im using writeFileSync because I couldn't get the console.log to work in the call back function

const shapesArr = ['circle','square','triangle'] //these are the options for the different shapes, they will be called in the list

class MakeLogo { //I made this a class instead of a function because I wanted to have access to multiple sub functions and because I know how export and work with classes, I could've made this a functions though
    createSVG(data){ //this takes the data that was returned in the "shape".render function, I made this a seperate callable function so the code would be dry
        writeFileSync('logo.svg', data) // I put just write file sync not fs writefile because the I used a destructing assignment prior
        console.log('"Generated logo.svg"')
    }
    run() { //this will be ran in the index file
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'logoText',
                message: 'What text do you want on your logo (enter up to 3 characters)',
                validate: function(text) { //this validation function makes sure the text that was input is between 1 and 3 characters
                    if(text.length <= 0 || text.length > 3){
                        console.log('   please enter a text for your logo between 0-3 characters')
                    }else{
                        return true; //once the text is the right length it is validated and clear to move on
                    }
                }
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What color do you want your text to be enter a color keyword (OR a hexadecimal number)'
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What color do you want your logo to be enter a color keyword (OR a hexadecimal number)'
            },
            {
                type: 'list',
                name: 'logoShape',
                message: 'what shape do you want your logo to be',
                choices: shapesArr 
            }
        ])
        .then(res => {
            switch(res.logoShape){ //creates a switch based on which of the shape inputs was selected 
                case 'circle':{  //if the res.logoShape is equivilent to 'circle' then this is ran
                   let newLogo = new Circle(res.logoText, res.textColor, res.shapeColor) //creates a new circle with the imported circle class, and gives it all of the different inputs from inquirer
                    return this.createSVG(newLogo.render()) //runs the createSVG function and passes what was returned in the render funtion which was a string of that has an svg file for a circle in it
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

module.exports = MakeLogo //this makes it so it can be used in the index.js file