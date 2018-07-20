var kittens = ["Milo", "Otis", "Garfield"]
// Add your functions and code here
function destructivelyAppendKitten() {
  kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.push("Ralph");
}

function destructivelyPrependKitten() {
  kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten() {
  kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.shift();
}

<<<<<<< HEAD
function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeFirstKitten() {
  return kittens.slice(1)
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
=======
function appendKitten() {
  kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.splice(3, 0, "Broom");
  return kittens
>>>>>>> f27b8169653ed755841da682d1a748bb5de640ad
}