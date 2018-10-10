const PlayerModel = require('../model/Player');

class Login {
    login(username) {
        let newPlayer = new PlayerModel(username);
        global.players.push(newPlayer)
        return newPlayer;
    }
}

module.exports = new Login();