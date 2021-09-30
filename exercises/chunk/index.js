// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
<<<<<<< HEAD
  const chunked = [];
=======
  const results = [];
  while (array.length) {
    results.push(array.slice(0, size));
    array = array.slice(size);
  }

  return results;
}
>>>>>>> 8e70e81c44ea8a7b4224cce2a424ad105a61ae2f

  while (array.length) {
    chunked.push(array.slice(0, size));
    array = array.slice(size);
  }

  return chunked;
}
module.exports = chunk;
