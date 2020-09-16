// Input 0 0, Output 0
// Input 0 1, Output 1
// Input 1 0, Output 1
// Input 1 1, Output 0

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const trainingData = [
  { input: [0,0], output: [0] },
  { input: [0,1], output: [1] },
  { input: [1,0], output: [1] },
  { input: [1,1], output: [0] }
];

net.train(trainingData);
console.log(net.run([0,0]));