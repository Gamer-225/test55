import { Client, GatewayIntentBits } from 'discord.js';
import express from 'express';

// 1. Web server to keep the host alive
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot is active 24/7!');
});

app.listen(PORT, () => {
  console.log(`HTTP Server running on port ${PORT}`);
});

// 2. Simple Discord Client initialization
const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Pass your BOT_TOKEN via environment variables
client.login(process.env.BOT_TOKEN);