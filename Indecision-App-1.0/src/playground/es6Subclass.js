class Person {
    constructor(name = 'Anonymus',age = 0) {
        this.name = name
        this.age = age
     }
    getGreetings() {
       return `Hi i am ${this.name}.`
    }
    getDescription() {
       return `${this.name} is ${this.age} year(s) Old`
    }
}

class Student extends Person {
    constructor(name,age,major) {
      super(name,age)
      this.major = major
    }
    hasMajor() {
         return !!this.major
    }
    getDescription() {
        let description = super.getDescription()
        if(this.major)
         return `${description} and has a Major of ${this.major}`
        else
         return description 
    }
}

class Traveler extends Person {
    constructor(name,age,homeLocation) {
       super(name,age)
       this.homeLocation = homeLocation
    }
    getGreetings() {
        let greetings = super.getGreetings()
        if(this.homeLocation)
         return `${greetings} i am travelling from ${this.homeLocation} `
        else
          return greetings 
    }
}

const me = new Traveler('Adhikar',22, 'Kopergaon')
console.log(me.getGreetings())

const other = new Traveler('Kevin',12)
console.log(other.getGreetings())