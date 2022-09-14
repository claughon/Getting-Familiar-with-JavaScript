//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (let i = 0; i < Object.keys(person3).length; i++){
    if (Array.isArray(Object.values(person3)[i])){
        Object.values(person3)[i].forEach(element => console.log(element))
    } else {
        console.log(Object.values(person3.shakes[0]))
    }
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single 
//parameter
// Adding to the age 

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    printInfo = () => {
        return `Name: ${this.name} \n Age: ${this.age}`
    }
    addAge = () => {
        {return this.age+=1}
    }
    addAge3 = () => {
        {return this.age+=3}
    }
}

let ruth = new Person('Ruth', 27)
console.log(ruth.printInfo())
console.log(ruth.addAge())
console.log(ruth.printInfo())

let dilbert = new Person('Dilbert', 11)
console.log(dilbert.printInfo())
console.log(dilbert.addAge3())
console.log(dilbert.printInfo())


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if 
    it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const lengthy_or_nah = (str) => {
    return new Promise((resolve, reject) =>{
        if (str.length > 10){
            resolve (str)
        } else {
            reject(str)
        }
    })
}

lengthy_or_nah("Mississippi")
    .then((result) =>{
        console.log(`${result} is a Big Word`)
    })
    .catch((error) => {
        console.log(`${error} is a small word`)
    })

    lengthy_or_nah("Hawaii")
    .then((result) =>{
        console.log(`${result} is a Big Word`)
    })
    .catch((error) => {
        console.log(`${error} is a small word`)
    })