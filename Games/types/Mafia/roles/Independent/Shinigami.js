const Role = require("../../Role");

module.exports = class Shinigami extends Role {
  constructor(player, data) {
    super("Shinigami", player, data);

    this.alignment = "Independent";
    this.cards = ["VillageCore", "WinByGuessingKira", "GuessKira"];
  }
};
