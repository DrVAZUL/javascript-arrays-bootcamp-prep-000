var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  const array = array
  const newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array , element) {
  array.unshift(element)
  return array;
}
