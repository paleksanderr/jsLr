
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

// const classValue = first.className;
// console.log(classValue);

second.className = 'text ';
// third.classList.add('colors');
// third.classList.add('text');
third.classList.add('text','colors' );
third.classList.remove('text')

const result = third.classList.contains('colors')
if (result) {
 console.log(`i've got it`);
}
else{
 console.log('nope');
}

const classValue = third.classList;
console.log(classValue);