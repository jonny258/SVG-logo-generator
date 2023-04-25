const inquirer = require('inquirer')

const shapesArr = [
    {
        name: 'circle'
    },
    {
        name: 'triangle'
    },
    {
        name: 'square'
    }
]

class MakeLogo {
    constructor(){
        this.text = ''
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
            console.log(res)
        })
    }
}

const newLogo = new MakeLogo()

newLogo.run()

module.exports = MakeLogo