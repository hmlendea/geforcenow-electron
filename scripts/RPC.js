// Discord Rich Presence module

const DiscordRPC = require("discord-rpc");
const configure = require("./../config.json");
const rpc = new DiscordRPC.Client({ transport: "ipc" });
const starttimestamp = new Date();
const clientId = configure.clientID;
if (!clientId) {
    throw new Error("Client ID (Application ID) is required.")
}

let RPC = {
    details: "Loading...",
    startTimestamp: starttimestamp,
    largeImageKey: "nvidia"
};

rpc.on("ready", () => {
    rpc.setActivity(RPC);
});

function setStatus(activity, playing=false) {
    if(playing) {
        RPC.details = `Playing ${activity}`
    } else {
        RPC.details = activity;
    }
    rpc.setActivity(RPC);
};

rpc.login({ clientId }).catch(console.error);
module.exports = { setStatus };