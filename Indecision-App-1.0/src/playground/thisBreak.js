const obj = {
    name : 'Apple',
    getName () {
        return this.name
    }
}

const getName = obj.getName.bind({name:'Bind'})
console.log(getName())
 
