const inquirer = require('inquirer');
const MachineOptions = require('./machine');
const options = require('../data');
const gameby = require('../data/gameby');

class User extends MachineOptions {
    constructor({ options, name, selected }){
        super({options});
        this._name = name;
        this._selected = selected;
        this._sort = this.sort();
    }

    set name(text){
        this._name = text;
    }
    set selected(text){
        this._selected = text;
    }
    get name(){
        return this._name;
    }
    get selected(){
        return this._selected;
    }
    logic(){
        if(this._selected === this._sort){
            return `${this._name}, máquina escolheu ${this._sort}
            Você escolheu ${this.selected}. Resultado ==> Empate! 
            `
        }else if(
            (this._selected === 'Pedra' && this._sort === 'Tesoura') ||
            (this._selected === 'Tesoura' && this._sort === 'Papel') ||
            (this._selected === 'Papel' && this._sort === 'Pedra')
        ){
            return `${this._name}, máquina escolheu ${this._sort}
            Você escolheu ${this.selected}. Resultado ==> Você ganhou! 
            `
        }else {
            return `${this._name}, máquina escolheu ${this._sort}
            Você escolheu ${this.selected}. Resultado ==> Você perdeu! 
            `
        }
    }

    game(){
        console.log(gameby)
        return inquirer.prompt([
            {
                name: 'name',
                message: 'Qual é o seu nome?',
                default: 'Jogador'
            },
            {
                type: 'list',
                name: 'jokenpo',
                message: 'Escolha uma dessas opções',
                choices: options,

            }
        ]).then((answer)=> {
            this._name = answer.name,
            this._selected = answer.jokenpo
            console.info(`${this.logic()}`)
        })
    }

}
module.exports = User;