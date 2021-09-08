class Person {
     constructor(name = 'Anonymus',age = 0) {
         this.name = name
         this.age = age
      }
     getGreetings() {
        return `Hi i am ${this.name}`
     }
     getDescription() {
        return `${this.name} is ${this.age} year(s) Old .`
     }
}

const me = new Person('Adhikar',22)
console.log(me.getDescription())

const person = new Person('Kevin')
console.log(person.getDescription())