const { Client } = require('discord.js-selfbot-v13');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fs = require('fs');

const accounts = JSON.parse(fs.readFileSync('accounts.json', 'utf8')).accounts;
const accountIds = accounts.map(account => account.id);

const clients = [];

async function Add(id, channel, token) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", `https://canary.discord.com/api/v9/channels/${channel}/recipients/${id}`);
    xhr.setRequestHeader("Authorization", token);
    xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/91.0.4472.124 Safari/537.36");

    xhr.onload = function () {
      if (xhr.status === 204) {
        resolve();
      } else {
        reject();
      }
    };

    xhr.send();
  });
}

function createClient(token) {
  const client = new Client({
    checkUpdate: false,
  });

  client.on('ready', () => {
    console.log(`Client ready: ${client.user.username} [${client.user.id}]`);
  });

  client.on('channelRecipientRemove', async (channel, member) => {


    const memberId = member.id;

    if (accountIds.includes(memberId)) {
      const startTime = Date.now();

      // Add the account back to the group chat
      await Add(memberId, channel.id, token);

      const endTime = Date.now();
      const duration = endTime - startTime;

      console.log(`User added after removal. Time taken: ${duration}ms`);
    }
  });

  client.login(token);

  return client;
}

for (const account of accounts) {
  const { token, id } = account;
  const client = createClient(token);
  clients.push(client);
}

console.log("* ReboundGuardian: https://github.com/fknMega")
