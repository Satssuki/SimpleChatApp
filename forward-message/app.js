const { Interact } = require("@satsuki/stalync-sdk");
const interact = new Interact("6c6ba8b16886", "SimpleChatApp");

module.exports.handle = (clientID, message) => {
    interact.reply(clientID, message);
}