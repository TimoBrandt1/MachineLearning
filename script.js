const restaurants = {
  "KFC": "Maandag",
  "Portofino": "Dinsdag",
  "Subway": "Woensdag",
  "BurgerKing": "Donderdag",
  "McDonalds": "Vrijdag",
  "Vivaldi": "Zaterdag",
  "Febo": "Zondag"
};

//Input: {Maandag, Dinsdag, Woensdag, etc..}
//Output: {Restaurant1, Restaurant2, etc..}

const trainingData = [];

for(let restourantName in restaurants){
  const dayOfWeek = restaurants[restourantName];
  trainingData.push({
    input: { [dayOfWeek]: 1},
    output: { [restourantName]: 1}
  });
}

const net = new brain.NeuralNetwork({ HiddenLayers: [3] });

const stats = net.train(trainingData);

console.log(stats);

console.log(net.run({ 'Maandag': 1}));

function restaurantForDay(dayOfWeek){
  const result = net.run({[dayOfWeek]: 1});
  let highestValue = 0;
  let highestRestaurantName= '';
  for (let restourantName in result){
    if (result[restourantName] > highestValue){
      highestValue = result[restourantName];
      highestRestaurantName = restourantName;
    }
  }
  return highestRestaurantName;
}

console.log(restaurantForDay('Maandag'));
console.log(restaurantForDay('Dinsdag'));
console.log(restaurantForDay('Woensdag'));
console.log(restaurantForDay('Donderdag'));
console.log(restaurantForDay('Vrijdag'));
console.log(restaurantForDay('Zaterdag'));
console.log(restaurantForDay('Zondag'));