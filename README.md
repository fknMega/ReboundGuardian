
<p align="center">

<img src='https://i.ibb.co/Q9SH8yQ/loko.png' width='250'>
 </p>

## Basic Info
ReboundGuardian will add a member once its kicked from a group,
which in theory will make you unkickable from that group,
have 2 accounts in `accounts.json` and it is almost impossible to kick you,
3 accounts = *godmode*
<p align="center">

<img src='https://i.ibb.co/H7GYcYL/Mega-Github-Readme.png' width='1000'>
<img src='https://img.shields.io/github/downloads/fknMega/ReboundGuardian/total.svg' width='150'>



 </p>

 <p align="center">
   <a href="https://github.com/fknMega/ReboundGuardian/releases/tag/Releases">
    <img src="http://en-ru.gigabyte-data.com/microsites/data/167/download-color.png" width='300'>
  </a>
 </p>
 
# Discord ReboundGuardian

ReboundGuardian is a self-bot written in Node.js that helps you automatically re-add members who have been removed from a group chat on Discord. 
It leverages the Discord.js library to achieve this functionality.

### Bonus ⭐
A second tool that will neutralize this tool.
[AntiReboundGuardian](https://github.com/fknMega/AntiReboundGuardian)


## Installation

1. Clone the repository or download the source code.
2. Open a terminal or command prompt and navigate to the project directory.
3. Run the following commands to install the required dependencies:
```
   npm install discord.js-selfbot-v13
   npm install xmlhttprequest
   ```

## Configuration

1. Create a new file called `accounts.json` in the project directory.
2. Edit `accounts.json` and populate it with the Discord account information in the following format:

   ```json
   {
     "accounts": [
       {
         "token": "YOUR_DISCORD_TOKEN",
         "id": "YOUR_DISCORD_ID"
       },
       {
         "token": "ANOTHER_DISCORD_TOKEN",
         "id": "ANOTHER_DISCORD_ID"
       }
     ]
   }
   ```

   Add as many accounts as you need, following the same structure. Make sure to replace `YOUR_DISCORD_TOKEN` with your Discord token and `YOUR_DISCORD_ID` with your Discord user ID. You can find your token and ID by following the instructions [here](https://www.youtube.com/watch?v=YEgFvgg7ZPI).

## Usage

1. Open a terminal or command prompt and navigate to the project directory.
2. Run the following command to start the Discord ResilientBot:

   ```
   node index.js
   ```

   The bot will log in with each account specified in `accounts.json` and monitor the group chats for member removal events. When a member is removed, the bot will automatically re-add the member if their ID matches any of the account IDs in `accounts.json`.

3. The console will display logs indicating the status of each client and the re-addition of members.

Exmaple log:

<img src='https://i.ibb.co/wNTSmTt/NVIDIA-Share-18-RJM3a8-DT.png' width='400'>

## Notes

- Discord self-bots are against Discord's Terms of Service. Use this bot at your own risk, as it may lead to the suspension or termination of your Discord account.
- This bot is intended for educational or personal use only. Do not use it for malicious purposes.
- A youtube video: https://www.youtube.com/watch?v=paaUW0lG55Y
- This tool was made by fknMega


