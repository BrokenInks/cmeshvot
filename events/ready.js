const db = require("quick.db")

module.exports.run = (client) => {
  console.log("JOIN TO SERVER : https://discord.gg/fsq" )
  client.user.setActivity(db.get(`status`) || "No Status :D"); 
  client.user.setPresence({
    status: "idle",  //You can show online, idle....
});
}