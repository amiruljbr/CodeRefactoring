class Animal {
  constructor(type, sound, age, weight) {
    this.type = type;
    this.sound = sound;
    this.age = age;
    this.weight = weight;
    this.isHungry = false;
    this.isSick = false;
  }

  getType() {
    return this.type;
  }

  setType(type) {
    this.type = type;
  }

  getSound() {
    return this.sound;
  }

  setSound(sound) {
    this.sound = sound;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }

  getWeight() {
    return this.weight;
  }

  setWeight(weight) {
    this.weight = weight;
  }

  isHungry() {
    return this.isHungry;
  }

  setHungry(isHungry) {
    this.isHungry = isHungry;
  }

  isSick() {
    return this.isSick;
  }

  setSick(isSick) {
    this.isSick = isSick;
  }

  makeSound() {
    console.log(this.sound);
  }

  feed() {
    this.isHungry = false;
    console.log('The animal has been fed.');
  }

  giveMedicine() {
    this.isSick = false;
    console.log('The animal has been given medicine.');
  }
}

class Zoo {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }

  removeAnimal(animal) {
    const index = this.animals.indexOf(animal);
    if (index !== -1) {
      this.animals.splice(index, 1);
    }
  }

  feedAnimals() {
    this.animals.forEach((animal) => {
      if (animal.isHungry) {
        animal.feed();
      }
    });
  }

  giveMedicineToSickAnimals() {
    this.animals.forEach((animal) => {
      if (animal.isSick) {
        animal.giveMedicine();
      }
    });
  }

  makeAllAnimalsMakeSound() {
    this.animals.forEach((animal) => {
      animal.makeSound();
    });
  }

  getAverageAge() {
    let totalAge = 0;
    this.animals.forEach((animal) => {
      totalAge += animal.getAge();
    });
    return totalAge / this.animals.length;
  }

  getTotalWeight() {
    let totalWeight = 0;
    this.animals.forEach((animal) => {
      totalWeight += animal.getWeight();
    });
    return totalWeight;
  }
}