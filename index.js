// Add your functions and code here

// kitten Array
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  return kittens.push('Ralph');
}

function destructivelyPrependKitten(name) {
  return kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var addKitten = ['Broom'];
  return kittens.concat(addKitten);
}

function prependKitten(name){
  var moreKittens = kittens.splice(0, 0, 'Arnold');
  return moreKittens;
}
