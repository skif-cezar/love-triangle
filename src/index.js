/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
   var count = 0;
  var preferences.length = l;
  for(var j = 0; j < l; j++){
      if(j == (preferences[preferences[preferences[j]-1]-1]-1){
          count++;
          }
  }
  return count/3;
};
