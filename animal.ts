/**
 * @class Animal
 */
class Animal {

    name: string;
    sound: string;
    isVeg: boolean;
    food: String;

    /**
     * [constructor: This function sets the values of instance variables]
     * @param {string} name [The name of the animal]
     * @param {string} sound [The sound the animal makes]
     * @param {boolean} isVeg [Is the animal vegetarian or non-vegetarian]
     * @param {string} food [The food that animal likes]
     */
    constructor ( name: string, sound: string, isVeg: boolean, food: string ) {
        this.name = name;
        this.sound = sound;
        this.isVeg = isVeg;
        this.food = food;
    }

    /**
     * [behavior: This function returns the behavior of the animal]
     * @return {string} [The behavior is returned]
     */
    behavior(): string {
        if ( this.isVeg )
            return `Its name is ${this.name}. It is a vegetarian. It likes to eat ${this.food}.`;
        else
            return `Its name is ${this.name}. It is a non-vegetarian. It likes to eat ${this.food}.`;
    }

    /**
     * [move: This function moves the animal]
     * @param {number} distance [This is the ditance covered by the animal]
     * @return {string} [Returns the message containing the distance moved]
     */
    move(distance: number): string {
        return `${this.name} has moved a distance of ${distance} kms.`;
    }

    /**
     * [makeSound: This function returns the sound that the animal makes]
     * @return {string} [The sound is returned]
     */
    makeSound(): string {
        return this.sound;
    }

}

/**
 * @class Tiger
 * @extends Animal
 */
class Tiger extends Animal {

    eyeColor: string;

    /**
     * [constructor: This function sets the values of instance variables]
     * @param {string} name [The name of the animal]
     * @param {string} sound [The sound tiger makes]
     * @param {boolean} isVeg [Is the animal vegetarian or non-vegetarian]
     * @param {string} food [The food that tiger likes]
     * @param {string} eyeColoe [The eye color of the tiger]
     */
    constructor ( name: string, sound: string, isVeg: boolean, food: string, eyeColor: string ) {
        super(name,sound,isVeg,food);
        this.eyeColor = eyeColor;
    }

    /**
     * [getEyeColor: The eye color of the tiger is returned]
     * @return {string} [The eye color is returned]
     */
    getEyeColor(): string {
        return this.eyeColor;
    }

    /**
     * [behavior: This function returns the behavior of the tiger]
     * @return {string} [The behavior is returned]
     */
    behavior(): string {
        return super.behavior();
    }

    /**
     * [makeSound: This function returns the sound that tiger makes]
     * @return {string} [The sound is returned]
     */
    makeSound(): string {
        return super.makeSound();
    }

    /**
     * [move: This function moves the tiger]
     * @param {number} distance [This is the ditance covered by the tiger]
     * @return {string} [Returns the message containing the distance moved]
     */
    move(distance: number): string {
        return `${this.name} has ran for a distance of ${distance} kms.`;
    }

}

/**
 * @class Dog
 * @extends Animal
 */
class Dog extends Animal {

    friendly: boolean

    /**
     * [constructor: This function sets the values of instance variables]
     * @param {string} name [The name of the animal]
     * @param {string} sound [The sound dog makes]
     * @param {boolean} isVeg [Is the dog vegetarian or non-vegetarian]
     * @param {string} food [The food that dog likes]
     * @param {boolean} friendly [Tells whether the dog is friendly or not]
     */
    constructor ( name: string, sound: string, isVeg: boolean, food: string, friendly: boolean ) {
        super(name,sound,isVeg,food);
        this.friendly = friendly;
    }

    /**
     * [isFriendly: This function tells whether the dog is friendly or not]
     * @return {string} [Returns the message that says whether the dog is friendly or not]
     */
    isFriendly(): string {

        if(this.friendly)
            return `It is friendly.`;
        else
            return `It is not friendly.`;

    }

     /**
     * [behavior: This function returns the behavior of the dog]
     * @return {string} [The behavior is returned]
     */
    behavior(): string {
        return super.behavior();
    }

    /**
     * [makeSound: This function returns the sound dog makes]
     * @return {string} [The sound is returned]
     */
    makeSound(): string {
        return super.makeSound();
    }

    /**
     * [move: This function moves the dog]
     * @param {number} distance [This is the ditance covered by the dog]
     * @return {string} [Returns the message containing the distance moved]
     */
    move(distance: number): string {
        return `${this.name} has walked for a distance of ${distance} kms.`;
    }

}

// Creating an instance of Dog class
let dog = new Dog('Bailey','barking',true,'cereals',true);

// Calling differenct properties and methods of Dog class
document.getElementById("demo0").innerHTML = dog.behavior();
document.getElementById("demo1").innerHTML = dog.isFriendly();
document.getElementById("demo2").innerHTML = `${dog.name} is ${dog.makeSound()}.`;
document.getElementById("demo3").innerHTML = dog.move(7);

// Creating an instance of Tiger class
let tiger = new Tiger('Leslie','growling',false,'flesh','amber');

// Calling differenct properties and methods of Tiger class
document.getElementById("demo4").innerHTML = tiger.behavior();
document.getElementById("demo5").innerHTML = `It has the eye color of ${tiger.getEyeColor()}.`;
document.getElementById("demo6").innerHTML = `${tiger.name} is ${tiger.makeSound()}.`;
document.getElementById("demo7").innerHTML = tiger.move(30);
