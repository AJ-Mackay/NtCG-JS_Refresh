var name = 'Ash';
var age = 37;
var hasHobbies = true;

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
