var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(element, array) {
 return [...array, element]

}

function destructivelyAddElementToBeginningOfArray(element, array) {
  array.push(element)
  return array;
}
