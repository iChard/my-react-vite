// @ts-check

export class Dog extends Animal {
    /**
     * @param {string} name
     * @param {number} age
     */
    constructor(name, age) {
        super()
        this.name = name;
        this.age = age;
        this.favorite_activity = undefined;
    }

    speak() {
        console.log(`${this.name}: No, ${this.favorite_activity}`);
    }
}

new Dog('web', 7).speak()