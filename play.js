// const name = 'Ash';
// let age = 37;
// const hasHobbies = true;

// age = 38;

// console.log(name);

// const summariseUser = (userName, userAge, userHasHobbies) => {
//   return (
//     'Name is ' +
//     userName +
//     ', age is ' +
//     userAge +
//     ' and the user has hobbies: ' +
//     userHasHobbies
//   );
// };

// const add = (a, b) => a + b;
// const addOne = (a) => a + 1;
// const addRandom = () => 1 + 2;

// console.log(add(1, 2));
// console.log(addOne(1));
// console.log(addRandom());

// console.log(summariseUser(name, age, hasHobbies));

const person = {
  name: 'Ash',
  age: 37,
  greet() {
    console.log('Hi, I am ' + this.name);
  },
};

// person.greet();

const hobbies = ['Reading', 'Puzzles'];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }
// console.log(hobbies.map((hobby) => 'Hobby: ' + hobby));
// console.log(hobbies);
hobbies.push('Programming');
console.log(hobbies);
