var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @class Animal
 */
var Animal = /** @class */ (function () {
    /**
     * [constructor: This function sets the values of instance variables]
     * @param {string} name [The name of the animal]
     * @param {string} sound [The sound the animal makes]
     * @param {boolean} isVeg [Is the animal vegetarian or non-vegetarian]
     * @param {string} food [The food that animal likes]
     */
    function Animal(name, sound, isVeg, food) {
        this.name = name;
        this.sound = sound;
        this.isVeg = isVeg;
        this.food = food;
    }
    /**
     * [behavior: This function returns the behavior of the animal]
     * @return {string} [The behavior is returned]
     */
    Animal.prototype.behavior = function () {
        if (this.isVeg)
            return "Its name is " + this.name + ". It is a vegetarian. It likes to eat " + this.food + ".";
        else
            return "Its name is " + this.name + ". It is a non-vegetarian. It likes to eat " + this.food + ".";
    };
    /**
     * [move: This function moves the animal]
     * @param {number} distance [This is the ditance covered by the animal]
     * @return {string} [Returns the message containing the distance moved]
     */
    Animal.prototype.move = function (distance) {
        return this.name + " has moved a distance of " + distance + " kms.";
    };
    /**
     * [makeSound: This function returns the sound that the animal makes]
     * @return {string} [The sound is returned]
     */
    Animal.prototype.makeSound = function () {
        return this.sound;
    };
    return Animal;
}());
/**
 * @class Tiger
 * @extends Animal
 */
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    /**
     * [constructor: This function sets the values of instance variables]
     * @param {string} name [The name of the animal]
     * @param {string} sound [The sound tiger makes]
     * @param {boolean} isVeg [Is the animal vegetarian or non-vegetarian]
     * @param {string} food [The food that tiger likes]
     * @param {string} eyeColoe [The eye color of the tiger]
     */
    function Tiger(name, sound, isVeg, food, eyeColor) {
        var _this = _super.call(this, name, sound, isVeg, food) || this;
        _this.eyeColor = eyeColor;
        return _this;
    }
    /**
     * [getEyeColor: The eye color of the tiger is returned]
     * @return {string} [The eye color is returned]
     */
    Tiger.prototype.getEyeColor = function () {
        return this.eyeColor;
    };
    /**
     * [behavior: This function returns the behavior of the tiger]
     * @return {string} [The behavior is returned]
     */
    Tiger.prototype.behavior = function () {
        return _super.prototype.behavior.call(this);
    };
    /**
     * [makeSound: This function returns the sound that tiger makes]
     * @return {string} [The sound is returned]
     */
    Tiger.prototype.makeSound = function () {
        return _super.prototype.makeSound.call(this);
    };
    /**
     * [move: This function moves the tiger]
     * @param {number} distance [This is the ditance covered by the tiger]
     * @return {string} [Returns the message containing the distance moved]
     */
    Tiger.prototype.move = function (distance) {
        return this.name + " has ran for a distance of " + distance + " kms.";
    };
    return Tiger;
}(Animal));
/**
 * @class Dog
 * @extends Animal
 */
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    /**
     * [constructor: This function sets the values of instance variables]
     * @param {string} name [The name of the animal]
     * @param {string} sound [The sound dog makes]
     * @param {boolean} isVeg [Is the dog vegetarian or non-vegetarian]
     * @param {string} food [The food that dog likes]
     * @param {boolean} friendly [Tells whether the dog is friendly or not]
     */
    function Dog(name, sound, isVeg, food, friendly) {
        var _this = _super.call(this, name, sound, isVeg, food) || this;
        _this.friendly = friendly;
        return _this;
    }
    /**
     * [isFriendly: This function tells whether the dog is friendly or not]
     * @return {string} [Returns the message that says whether the dog is friendly or not]
     */
    Dog.prototype.isFriendly = function () {
        if (this.friendly)
            return "It is friendly.";
        else
            return "It is not friendly.";
    };
    /**
    * [behavior: This function returns the behavior of the dog]
    * @return {string} [The behavior is returned]
    */
    Dog.prototype.behavior = function () {
        return _super.prototype.behavior.call(this);
    };
    /**
     * [makeSound: This function returns the sound dog makes]
     * @return {string} [The sound is returned]
     */
    Dog.prototype.makeSound = function () {
        return _super.prototype.makeSound.call(this);
    };
    /**
     * [move: This function moves the dog]
     * @param {number} distance [This is the ditance covered by the dog]
     * @return {string} [Returns the message containing the distance moved]
     */
    Dog.prototype.move = function (distance) {
        return this.name + " has walked for a distance of " + distance + " kms.";
    };
    return Dog;
}(Animal));
// Creating an instance of Dog class
var dog = new Dog('Bailey', 'barking', true, 'cereals', true);
// Calling differenct properties and methods of Dog class
document.getElementById("demo0").innerHTML = dog.behavior();
document.getElementById("demo1").innerHTML = dog.isFriendly();
document.getElementById("demo2").innerHTML = dog.name + " is " + dog.makeSound() + ".";
document.getElementById("demo3").innerHTML = dog.move(7);
// Creating an instance of Tiger class
var tiger = new Tiger('Leslie', 'growling', false, 'flesh', 'amber');
// Calling differenct properties and methods of Tiger class
document.getElementById("demo4").innerHTML = tiger.behavior();
document.getElementById("demo5").innerHTML = "It has the eye color of " + tiger.getEyeColor() + ".";
document.getElementById("demo6").innerHTML = tiger.name + " is " + tiger.makeSound() + ".";
document.getElementById("demo7").innerHTML = tiger.move(30);
