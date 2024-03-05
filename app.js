const team = {
  _players: [
    {
      "First Name": "Bukayo",
      "Last Name": "Saka",
      age: 22,
    },
    {
      "First Name": "Gabriel",
      "Last Name": "Martinelli",
      age: 22,
    },
    {
      "First Name": "Leandro",
      "Last Name": "Trossard",
      age: 29,
    },
  ],
  _games: [
    {
      opponent: "Liverpool",
      teamPoints: 3,
      opponentPoints: 1,
    },
    {
      opponent: "Burnley",
      teamPoints: 5,
      opponentPoints: 0,
    },
    {
      opponent: "Newcastle",
      teamPoints: 4,
      opponentPoints: 1,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer("Martin", "Odegaard", 25);
console.log(team._players);

team.addGame("Brighton", 2, 0);
console.log(team._games);
