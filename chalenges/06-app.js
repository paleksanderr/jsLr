const car = {
  make: 'doge',
  model: 'new one',
  year: 1990,
  color: ['black', 'red'],
  hybrid: false,
  drive: function () {
    console.log('driving...');
  },
  stop() {
    console.log('stop...');
  },
};
console.log(car.make);
console.log(car.color[0]);
car.drive();
car.stop();
