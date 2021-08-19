class createPerson {
    constructor(name, age, personSize, personWeight) {
        this.name = name;
        this.age = age;
        this.personSize = personSize;
        this.personWeight = personWeight;

        let imc = calcIMC(personSize, personWeight);
        this.imc = imc;

        let year = calcAge(this.age);
        this.yearBirth = year;

    }
}

function calcIMC(personSize, personWeight){
    return (personWeight / (personSize * personSize)).toFixed(2)
    
}
function calcAge(age){
    var year = new Date().getFullYear();
    return (year - age)
    
}

function arrayPerson(...person){
    const arrayPerson=[];
    arrayPerson.push(...person)
    console.log(arrayPerson)
}

const personA = new createPerson("Renata", 28, 1.50, 65)
const personB = new createPerson("Marciel", 35, 1.70, 70)

arrayPerson(personA, personB)
