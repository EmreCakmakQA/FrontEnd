class Person {
    constructor(name, gender, age, interests, bio, greeting) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.interests = interests;
        this.bio = bio;
        this.greeting = greeting;
    }
    getInfo() {
        return `${this.name} is a ${this.gender} who is ${this.age} years old. They like ${this.interests} and say ${this.greeting}. Their bio is ${this.bio}`;
    }


}



class Teacher extends Person {
    constructor(name, gender, age, interests, bio, greeting, salary) {
        super(name, gender, age, interests, bio, greeting);
        this._salary = salary;
    }
}

class Student extends Person {
    constructor(name, gender, age, interests, bio, greeting, subject, year) {
        super(name, gender, age, interests, bio, greeting);
        this._subject = subject;
        this._year = year;
    }
}

let emre = new Person("Emre", "male", 27, ["cars", "dogs"], "likes to eat cheese", "wassup!");
console.log(emre.getInfo());