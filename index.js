var kittens = [
  'Milo', 
  'Otis', 
  'Garfield'
  ] //define your array here

// Add your functions and code here
  function destructivelyAppendKitten() {
    kittens.push('Ralph')
    return kittens
  } 

function destructivelyPrependKitten() {
    kittens.unshift('Bob')
    return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  
  let newAray = [...kittens]
  newAray.push(name)
  return newAray
}
appendKitten('broom')

function prependKitten(name) {
  
  let newAray = [...kittens]
  newAray.push(name)
  return newAray
}
prependKitten('broom')












