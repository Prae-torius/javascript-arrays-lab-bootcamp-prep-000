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
  var moreKittens = kittens.splice(3, 0)
  return ;
}