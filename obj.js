// JS Object
marco = {
    name:"Marco",
    age: 26,
    favColor:"cyan"
}
console.log(marco)
console.table(marco)

console.log(marco['name'])
console.log(marco.name)

let myKey="age"
console.log(marco.myKey) // NO !!!!! DOESN"T WORK!
console.log(marco[myKey]) // to use variable you have to use brackets

marco.isGoodCoder=true
console.table(marco)

myNewKey="hairColor"
// marco.myNewKey="Black" // NOPE! makes a key myNewKey
marco[myNewKey] = 'Black'
console.table(marco)

let person2 = {
    name: "Max",
    age:31,
    progLanguages:['JavaScript','Python','C++', 'Java'],
    favColor: "Blue",
    teams:[
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball:['Chicago Bulls','Chicago Sky'],
            soccer:['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            baseball:'Toronto Bluejays',
            football: 'LA Rams',
            basketball: 'Milwalkee Bucks',
            soccer: ['Manchester United','Liverpool']
        }
    ]
}

// print the work Blue
console.log(person2.favColor)
// print the name Max
console.log(person2.name)
// print Python
console.log(person2.progLanguages[1])
// print Milwalkee Bucks
console.log(person2.teams[1].basketball)
// print Liverpool
console.log(person2.teams[1].soccer[1])
// print the number for the total number of soccer teams listed
console.log(person2.teams[0].soccer.length + person2.teams[1].soccer.length)

// Object Destructing

//list destructuring
let [x,y, ...leftover] = [1,2,3,4,5]
console.log(x) //1 
console.log(y) //2
console.log(leftover)

shoe = {
    nam:'Red Nike',
    size: 11,
    color: 'Red',
    brand: 'Nike',
    fromSweatShop:true
}

const test = (myObj) => {
    console.log(myObj.nam)
    console.log(myObj.size)
    console.log(myObj.color)
}
test(shoe)

const test1 = ({nam, size, color}) => {
    console.log(nam)
    console.log(size)
    console.log(color)
}
test1(shoe)

const {nam, color, size, ...leftovers} = shoe
console.log({...leftovers, newKey:'newValue'})

let person={
    firstName: "Crystal",
    lastName: "Metheny",
    nickName: "Ol' Dirty Illegitimate Child",
    age: 35,
    height: 62
}

let quote = "Here I go, deep type flow, Jackques Cosuteau could never get this low."

const myFunction = ({firstName, lastName, nickName, age, height}, quote) =>{
    let reply=null
    myObj = {
        name:"my name"
    }
    console.log(quote)
    console.table(firstName)
    console.table(lastName)
    console.table(nickName)
    // nullish collescence operator  //undiefined or nulls are replaced by the right exp
    console.log(reply ?? 'buy a toothbrush')
    console.log(myObj.id?.toString() ?? 789)
}

myFunction(person, quote)

newPerson = {...person, id:187}
console.table(newPerson)


const testF=(alist)=>{
    alist?.map((x)=>console.log(x)) ?? console.log("No list given")
}
let testlist
testF([12,234,3,4])

//looping!!!!

// .keys .values .items in python

console.log(Object.keys(person2))
console.log(Object.values(person2))
console.log('==============================')
console.log(Object.entries(person2))
console.log('==============================')

// loop through an object ... the old ugly way aka Kevin way
for (let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i]) //keys
    console.log(Object.values(person2)[i]) //values 
    console.log(person2[Object.keys(person2)[i]]) // also values
}

console.log('==============================')

// ES6 way to loop over a dictionary!
// for in loop in JS loops over a dictionary/Object not a list (like it does in python)
for (let key in person2){
    console.log(key)
    console.log(person2[key])
}

// loop i = 0
console.log("name")
console.log(person2["name"])
// loop i = 1
console.log("age")
console.log(person2["age"])
// loop i = 2
console.log("progLanguages")
console.log(person2["progLanguages"])
// loop i = 3
console.log("favColor")
console.log(person2["favColor"])
// loop i = 4
console.log("teams")
console.log(person2["teams"])

let testArray = [1,2,3,4]
console.log(typeof testArray) //object
console.log(testArray instanceof Array) // true
console.log(testArray instanceof Object) //true
console.log(Array instanceof Object) //true
console.log(Array.isArray(testArray)) //true
console.log(typeof 'hello') //string
console.log(typeof {}) //object
console.log('hello' instanceof Object) //False
console.log(null instanceof Object) //False
console.log({key:1} instanceof Object) //true
console.log({key:1} instanceof Object && !({key:1} instanceof Array))
console.log(typeof 12.5)
console.log(typeof 12)