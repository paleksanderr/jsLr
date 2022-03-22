

// function fullName(firstName, lastName) {
//  const fullName = `${firstName} ${lastName}`
//  return fullName.toUpperCase();
// }

function fullName({firstName, lastName}) {
  const fullName = `${firstName} ${lastName}`;
  return fullName.toUpperCase();
}


console.log(fullName({lastName:'aleksander', firstName:'pawel'}));