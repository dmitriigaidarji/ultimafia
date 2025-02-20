const Achievements = require("../Achievements");

module.exports = class MafiaVictory extends Achievements {
  constructor(name, player) {
    super(name, player);

    this.listeners = {
      aboutToFinish: function () {
        if (this.game.getRoleAlignment(this.player.role.name) != "Mafia") {
          return;
        }
        if (
          Object.values(this.game.winners.groups)
            .flat()
            .find((p) => p === this.player)
        ) {
          this.player.EarnedAchievements.push("Mafia2");
        }
      },
    };
  }
};
