const trainingData = [
  [1,2,3,4,5],
  [5,4,3,2,1],
  [5,6,7,8,9,10]
  [6,8,10,12,14,16]
];

const net = new brain.recurrent.LSTMTimeStep();

net.train(trainingData);

console.log(net.run([1,2,3,4]));
console.log(net.run([5,4,3,2]));
console.log(net.run([5,6,7,8,9]));
console.log(net.run([6,8,10,12,14]));