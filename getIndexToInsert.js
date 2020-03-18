//INSERT INDEX


const getIndexToInsert = (arr, num) => {
  let sortArray = arr.sort(function (a, b) { return a - b });
  for (let i = 0; i < sortArray.length; i++) {
    if (sortArray[i] < num) {
      continue;
    } else {
      return i;
    }
  }

};

console.log(getIndexToInsert([40, 60, 5, 322, 48, 83], 80));

module.exports = {
  getIndexToInsert
};