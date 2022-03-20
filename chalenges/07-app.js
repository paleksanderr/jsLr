const person1 = {
  name1: 'paw',
  age: 25,
  status1: 'resident',
};

const person2 = {
  name2: 'gab',
  age: 25,
  status1: 'tourist',
};

if (person1.age >= 18 && person1.status1 === 'resident') {
  console.log('your good to go');
} else {
  console.log("you're off");
}
if (person2.age >= 18 && person2.status1 === 'resident') {
  console.log('your good to go');
} else {
  console.log("you're off");
}
