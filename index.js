const { CLI } = require("./cli");
const { Server } = require("./server");
const { Client } = require("./client");

async function main() {
  const cli = new CLI();
  const nickname = await cli.askTerminal("What is your nickname? ");

  const lowerCaseNickname = nickname.toLowerCase();

  console.log(`Welcome to the game, ${lowerCaseNickname}!`);
  if (lowerCaseNickname === "server") {
    const server = new Server();
  } else {
    const client = new Client(nickname);
  }
  console.log(`Welcome to the game, ${nickname}!`);
}

main();
