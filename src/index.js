/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
 var count = 0;
  for(var j = 0; j < preferences.length; j++){
      if (j === preferences[preferences[preferences[j]-1]-1]-1]){
          count++;
          }
  }
  var c = count / 3;
  return c;
};
