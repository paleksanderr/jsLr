const calculateTotal = function (subTotal, tax) {
  return subTotal + tax;
};

// console.log(calculateTotal(200, 20));

const order1 = calculateTotal(55, 10);
const order2 = calculateTotal(40, 88);
const order3 = calculateTotal(99, 99);

console.log(order1, order2, order3);
