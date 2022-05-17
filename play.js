const name = 'Ash';
let age = 37;
const hasHobbies = true;

age = 38

// console.log(name);

function summariseUser(userName, userAge, userHasHobbies) {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobbies
  );
}

console.log(summariseUser(name, age, hasHobbies));
