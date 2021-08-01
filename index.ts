interface IPerson {
  firstName: string;
  lastNaame: string;
  age: number;
  height: number;
  fullName(value: string): void;
}

const animale: string = 'Dog';
const p1: IPerson = {
  age: 25,
  firstName: 'Yin',
  lastNaame: 'Smith',
  fullName(val: string) {
    console.log(val);
  },
  height: 175
};

interface IAnimal {
  name: string;
  type: string; // mammal, amphibian
}

interface IMammal {
  canGiveBirth: boolean;
}

class Dog implements IAnimal, IMammal {
  name: string;
  type: string;
  breed: string;
  colour: string;
  canGiveBirth: boolean;

  constructor(
    _name: string,
    _type: string,
    _breed: string,
    _colour: string,
    _canGiveBirth: boolean
  ) {
    this.name = _name;
    this.type = _type;
    this.breed = _breed;
    this.colour = _colour;
    this.canGiveBirth = _canGiveBirth;
  }
}

const dog1: Dog = new Dog(
  'Archie',
  'Mammal',
  'Border Collie',
  'Chocolate',
  true
);

console.log(dog1);
