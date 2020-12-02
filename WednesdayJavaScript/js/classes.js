class Cat {
    constructor(name, age, favTreat) {
        this.name = name;
        this.age = age;
        this.favTreat = favTreat;
    }

    speak() {
        return "Meow!"
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getFavTreat() {
        return `${this.name}'s favourite treat is ${this.favTreat}`;
    }

}

myCat = new Cat("Harry", 5, "Bacon");
//console.log(myCat.getAge()); // 5
//console.log(myCat.getName()); // Harry
//console.log(myCat.getFavTreat()); // Harry's favourite treat is Bacon;

let troy = new Cat("Troy", 5, "Mice");
let max = new Cat("Max", 6, "Cheese");
let larry = new Cat("Larry", 2, "Fish");
let chris = new Cat("Chris", 1, "Biscuits");


let cats = [troy, max, larry, chris, myCat];
for (let i = 0; i < 6; i++) {
    console.log(cats[i].getFavTreat());
}


