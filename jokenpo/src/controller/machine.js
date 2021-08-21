class MachineOptions{
    constructor({options}){
        this._options = options;
    }
    sort(){
        const sortOptions = Math.floor(Math.random() * 3 - 0)
        return this._options[sortOptions].name
    }
    set options(options){
        this._options = options
    }
    get options(){
        return this._options
    }

}
module.exports = MachineOptions;
