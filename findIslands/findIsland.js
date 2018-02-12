const testIslands = () => {
  let testSubjects = [ 
    //3 Islands
    [
      [0,0,0,0],
      [1,0,1,0],
      [0,0,1,0],
      [1,0,0,0]
    ],
    //1 Island
    [
      [1,1,1,1,1],
      [1,1,1,1,1]
    ],
    //2 Islands
    [
      [1,1,0,1,1],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [1,0,0,0,0]
    ],
    //1 Island
    [
      [1,1,0,1,1],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [1,1,1,1,1]
    ]
  ]

  return testSubjects;
}

/**
 * 
 * @param {array} matrix 2d array which has 1s and 0s 
 * @returns {integer} number of islands it finds
 * Linear operation in regards to total spaces
 * Constant Memory as we change the island recursively
 */
const findIsland = (matrix) => {
  let counter = 0;
  const _togglePosition = (matrix, i, j) => {
    return matrix[i][j] ^= matrix[i][j];
  }
  
  const _exploreIsland = (matrix, i, j) => {
    if(!matrix[i] || !matrix[i][j]){
      return;
    } else if (matrix[i][j] === 1){
      _togglePosition(matrix, i, j)
      _exploreIsland(matrix, i+1,j);
      _exploreIsland(matrix, i-1,j);
      _exploreIsland(matrix, i,j+1);
      _exploreIsland(matrix, i,j-1);
    } 
  }

  for (let i = 0; i < matrix.length; i ++){
    for (let j = 0; j < matrix[i].length; j++){
        if (matrix[i][j] === 1){
          counter++;
          _exploreIsland(matrix, i, j)
        }
    }
  }

  return counter
}



const init = () => {
  let islands = testIslands();
  for (let i = 0; i < islands.length; i++){
    console.log('Island Number',i,'Islands are', findIsland(islands[i]))
  }
}

init();