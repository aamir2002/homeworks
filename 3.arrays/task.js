function compareArrays(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  const arr = arr1.concat(arr2)
  for (let i = 0; i < arr.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}


function advancedFilter(arr) {
  const currentNubmers = arr.filter(i => i > 0 && i % 3 == 0);
  const result = currentNubmers.map(i => i * 10);
  return result;
}

