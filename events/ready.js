module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("!yardım -- Developer by Discord İd: gPx#8919 --gPxCode Music", { //Oynuyor Kısmı
    type: "LISTENING",//LISTENING, WATCHING, PLAYING, STREAMING
  });
};