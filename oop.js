// ES-5 Object Prototype

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    
    this.first_letter_model=function(){
        return this.model[0]
    }

    this.printInfo = function(color, wheels=0){
        console.log(`this is a ${this.year} ${this.make} ${this.model} and \
has ${wheels} wheels and is color ${color}`)
    }
}

const honda = new Car("Honda","Civic", 2020)
console.table(honda)
console.log(honda)
console.log(honda.model)
console.log(honda['model'])
console.log(honda.first_letter_model())
honda.printInfo("Cyan",2)

honda.something = "something else"
console.table(honda)
console.log(honda.something)
honda.year = 1992 
console.table(honda)


honda.drive = function(){console.log("VROOOOOMMMMMMM!!!!!!")}
honda.drive()

toyota = new Car("Toyota","Camry", 2020)
// toyota.drive()

Car.prototype.miles=200000
console.log(toyota.miles)
console.log(honda.miles)

String.prototype.firstLetter = function(){return this[0]}
console.log('HappyDance'.firstLetter())


// ES-6

class Human{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    returnInfo(){
        return `Name: ${this.name} \nAge: ${this.age} \nGender: ${this.gender}`
    }
}

let wilma = new Human('Wilma', 25, "Female")
console.table(wilma)
console.table(wilma.returnInfo())

// class Baby(Human):  in python

class Baby extends Human{
    constructor(name, age, gender, walking){
        // super().__init__(name,age,gender)
        super(name, age, gender)
        this.walking=walking
    }

    isBabyWalking(){
        if(this.walking){
            return "Baby is walkin'"
        }else{
            return "Baby ain't walking"
        }
    }

    returnInfo(){
        return `Walking:${this.walking}\nName: ${this.name} \nAge: ${this.age} \nGender: ${this.gender}`
    }
}

let pebbles = new Baby('Pebbles', 1, 'Female', true)
console.log(pebbles)
console.log(pebbles.isBabyWalking())
console.log(pebbles.returnInfo())
