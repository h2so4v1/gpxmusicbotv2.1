module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("!yardım -- Developer by gPx -- gPxCode Music", { //Oynuyor Kısmı
    type: "LISTENING",//LISTENING, WATCHING, PLAYING, STREAMING
  });
};
