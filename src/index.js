
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length <= 0) return []
  return ts(matrix)
}
function ts(matrix) {
  let resA = []
  matrix.forEach((a, idx) => {
    if (idx % 2 === 0) {
      return a.forEach(el => resA.push(el))
    }
    else {
      return a.reverse().forEach(el => resA.push(el))
    }
  });
  return resA
}