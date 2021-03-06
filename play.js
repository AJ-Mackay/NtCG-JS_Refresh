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

// const person = {
//   name: 'Ash',
//   age: 37,
//   greet() {
//     console.log('Hi, I am ' + this.name);
//   },
// };

// const printName = ({ name }) => {
//   console.log(name);
// };

// printName(person);

// const { name, age } = person;
// console.log(name, age);

// person.greet();
// const copiedPerson = { ...person };
// console.log(copiedPerson);

// const hobbies = ['Reading', 'Puzzles'];
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

// for (let hobby of hobbies) {
//   console.log(hobby);
// }
// console.log(hobbies.map((hobby) => 'Hobby: ' + hobby));
// console.log(hobbies);
// hobbies.push('Programming');
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) => {
//   return args;
// };

// console.log(toArray(1, 2, 3, 4));

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log('Timer is done!');
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log('Hello!');
console.log('Hi!');

const name = 'Ash';
const age = 37;

console.log(`My name is ${name} and I am ${age} years old.`);
