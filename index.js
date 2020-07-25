

function validateLineup(arr) {
  var newarr = []

  for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i].salary)
  }

  function sumsal(num, sal) {
    return num + sal
  }
  const totalsal = newarr.reduce(sumsal, 0) // The total salary of all players 

  if (totalsal > 45000) {
    return false
  }// lineup may not exceed $45,000 
  var teamIds = []

  for (let i = 0; i < arr.length; i++) {
    teamIds.push(arr[i].teamId)
  }
  var dublicate = []

  for (var i = 0; i < teamIds.length; i++) {
    for (var j = 0; j < teamIds.length; j++) {
      if (teamIds[i] === teamIds[j]) {
        dublicate.push(teamIds[i])
      }
    }
    if (dublicate.length > 2) { // Lineups may not contain more than 2 players from a single team
      return false
    }
    dublicate = []
  }

  var gameIds = []

  for (let i = 0; i < arr.length; i++) {
    gameIds.push(arr[i].gameId)
  }
  var dublicateGameId = []

  for (let i = 0; i < gameIds.length; i++) {
    for (let j = 0; j < gameIds.length; j++) {
      if (gameIds[i] === gameIds[j]) {
        dublicateGameId.push(gameIds[i])
      }
    }
    if (dublicateGameId.length > 3) {
      return false
    }
    dublicateGameId = [] // Lineups may not contain more than 3 players from a single game
  }
  var positions = []

  for (let i = 0; i < arr.length; i++) {
    positions.push(arr[i].position)
  }

  var dublicatePosition = []

  for (let i = 0; i < positions.length; i++) {
    for (let j = 0; j < positions.length; j++) {
      if (positions[i] === positions[j]) {
        dublicatePosition.push(positions[i])
      }
    }
//if there is more than 1 'p' return false
    if(dublicatePosition[0] === 'P'){
    if (dublicatePosition.length > 1){
      return false
    }
    }
    if (dublicatePosition[0] === 'C'){
      if(dublicatePosition.length > 1){
        return false
      }
    }

    if (dublicatePosition[0] === '1B'){
      if(dublicatePosition.length > 1){
        return false
      }
    }

    if (dublicatePosition[0] === '2B'){
      if(dublicatePosition.length > 1){
        return false
      }
    }

    if (dublicatePosition[0] === '3B'){
      if(dublicatePosition.length > 1){
        return false
      }
    }

    if (dublicatePosition[0] === 'SS'){
      if(dublicatePosition.length > 1){
        return false
      }
    }

    if (dublicatePosition[0] === 'FO'){
      if(dublicatePosition.length > 3){
        return false
      }
    }




   dublicatePosition = []
  }
}









module.exports = validateLineup
