const Card = require("../../Card");

module.exports = class EndangeredGraveyard extends Card {
  constructor(role) {
    super(role);

    if (role.alignment == "Independent") {
      return;
    }

    this.listeners = {
      roleAssigned: function (player) {
        if (player !== this.player) {
          return;
        }

        if (this.player.hasItem("IsTheTelevangelist")) {
          return;
        }

        this.game.queueAlert(
          `${this.player.role.name} is Kind Of Endangered! Don't let them be Exorcised!`,
          0,
          this.game.players.filter(
            (p) => p.role.alignment === this.player.role.alignment
          )
        );
      },
      exorcise: function (player) {
        var aliveRoles = this.game.players.filter(
          (p) => !p.exorcised && p.role.name == this.player.role.name
        );
        if (aliveRoles.length > 0) {
          return;
        }

        if (this.player.hasItem("IsTheTelevangelist")) {
          return;
        }

        if (this.player.role.alignment == "Cult") {
          var devotion = this.game.players.filter(
            (p) => p.alive && p.role.name == "Devotee"
          );
          if (devotion.length > 0) {
            var backUpTarget = devotion[0];
            backUpTarget.setRole(
              `${this.player.role.name}:${this.player.role.modifier}`,
              this.player.role.data
            );
            return;
          }
        }

        for (let p of this.game.alivePlayers()) {
          if (p.role.alignment === this.player.role.alignment) {
            p.kill("basic", this.player, instant);
          }
        }
      },
    };
  }
};
