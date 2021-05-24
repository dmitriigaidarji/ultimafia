const Message = require("./Message");

module.exports = class Quote extends Message {

	constructor(info) {
		super(info);

		this.isQuote = true;
		this.messageId = info.messageId;
		this.fromMeetingId = info.fromMeetingId;
		this.fromState = info.fromState;
		this.quotable = false;
		this.cancel = false;
	}

	send() {
		this.timeSent = Date.now();
		this.recipients = this.meeting.getPlayers();

		if (this.anonymous) {
			this.versions["*"] = new Quote(this);
			this.anonymous = false;
		}
		else
			this.versions["*"] = this;

		if (this.sender) {
			var newVersion = this.sender.speakQuote(this.versions["*"]);

			if (!newVersion)
				return;

			if (newVersion.modified)
				newVersion.modified = false;

			this.versions["*"] = newVersion;
		}

		this.meeting.messages.push(this);

		for (let player of this.recipients)
			player.hearQuote(this.versions["*"], this);

		if (this.game.isSpectatorMeeting(this.meeting))
			this.game.spectatorsHearQuote(this.versions["*"]);

		this.game.events.emit("message", this);
	}

	getMessageInfo(player) {
		var playerId, version, senderId;

		if (player == "spectator") {
			playerId = "spectator";
			version = this.versions["*"];
		}
		else if (player) {
			playerId = player.id;
			version = this.versions[playerId];

			if (!version)
				return;
		}
		else if (this.versions["*"].parseForReview)
			version = this.versions["*"].parseForReview(this);
		else
			version = this;

			if (!version)
				version = this;

		if (version.isServer)
			senderId = "server";
		else if (version.anonymous)
			senderId = "anonymous";
		else
			senderId = version.sender.id;

		return {
			isQuote: true,
			senderId: senderId,
			messageId: version.messageId,
			toMeetingId: version.meeting && version.meeting.id,
			fromMeetingId: version.fromMeetingId,
			fromState: version.fromState,
			time: version.timeSent
		};
	}

}