const mystery="answer";

const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
  [mystery]: 40, //dynamic attribute
};

console.log(obj.mystery);
console.log(obj.answer);
