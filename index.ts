import TelegramBot from 'node-telegram-bot-api';
import axios from 'axios';
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
// replace the value below with the Telegram token you received from @BotFather
// const token = process.env["BOT_TOKEN"];

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(process.env["BOTKEY"], { polling: true });

bot.onText(/\/dailyfees (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  let args = match[1]; // the captured "whatever"

  // Replace spaces with hyphens and convert to lowercase
  args = args.replace(/\s+/g, '-').toLowerCase();
  try {
    // const response = await fetch("https://api.llama.fi/fees")
    const response = await axios.get(`https://api.llama.fi/summary/fees/${args}?dataType=dailyFees`);
    const fees = response.data
    let message = '';
    message += `Protocol Name: ${fees.name}\n`;
    if (fees.address) {
      message += `Address: ${fees.address}\n`;
    }
    if (fees.chains) {
      message += `Chain: ${(fees.chains)}\n`;
    }
    if (fees.url) {
      message += `Website: ${(fees.url)}\n`;
    }
    message += `Total 24H fees: ${formatter.format(fees.total24h)}\n`;
    message += `Total 48H fees: ${formatter.format(fees.total48hto24h)}\n`;
    message += `Total 7d fees: ${formatter.format(fees.total14dto7d)}\n`;
    message += `Change: ${fees.change_1d}%\n`;

    sendMessage(chatId, message);
  } catch (error) {
    console.error(error);
    sendMessage(chatId, 'Error fetching data');
  }
});
bot.onText(/\/totalfees (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  let args = match[1]; // the captured "whatever"

  // Replace spaces with hyphens and convert to lowercase
  args = args.replace(/\s+/g, '-').toLowerCase();
  try {
    // const response = await fetch("https://api.llama.fi/fees")
    const response = await axios.get(`https://api.llama.fi/summary/fees/${args}?dataType=totalFees`);
    const fees = response.data
    let message = '';
    console.log(fees)

    console.log("??????????????????????")
    message += `Protocol Name: ${fees.name}\n`;
    if (fees.address) {
      message += `Address: ${fees.address}\n`;
    }
    if (fees.chains) {
      message += `Chain: ${(fees.chains)}\n`;
    }
    if (fees.url) {
      message += `Website: ${(fees.url)}\n`;
    }
    message += `Total 24H fees: ${formatter.format(fees.total24h)}\n`;
    message += `Total 7d fees: ${formatter.format(fees.total14dto7d)}\n`;
    message += `Change: ${fees.change_1d}%\n`;

    sendMessage(chatId, message);
  } catch (error) {
    console.error(error);
    sendMessage(chatId, 'Error fetching data');
  }
});
bot.onText(/\/dailyrevenue (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  let args = match[1]; // the captured "whatever"

  // Replace spaces with hyphens and convert to lowercase
  args = args.replace(/\s+/g, '-').toLowerCase();
  try {
    // const response = await fetch("https://api.llama.fi/fees")
    const response = await axios.get(`https://api.llama.fi/summary/fees/${args}?dataType=dailyRevenue`);
    const fees = response.data
    let message = '';
    console.log(fees)

    console.log("??????????????????????")
    message += `Protocol Name: ${fees.name}\n`;
    if (fees.address) {
      message += `Address: ${fees.address}\n`;
    }
    if (fees.chains) {
      message += `Chain: ${(fees.chains)}\n`;
    }
    if (fees.url) {
      message += `Website: ${(fees.url)}\n`;
    }
    message += `Total 24H fees: ${formatter.format(fees.total24h)}\n`;
    message += `Total 7d fees: ${formatter.format(fees.total14dto7d)}\n`;
    message += `Change: ${fees.change_1d}%\n`;

    sendMessage(chatId, message);
  } catch (error) {
    console.error(error);
    sendMessage(chatId, 'Error fetching data');
  }
});
bot.onText(/\/totalrevenue (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  let args = match[1]; // the captured "whatever"

  // Replace spaces with hyphens and convert to lowercase
  args = args.replace(/\s+/g, '-').toLowerCase();
  try {
    // const response = await fetch("https://api.llama.fi/fees")
    const response = await axios.get(`https://api.llama.fi/summary/fees/${args}?dataType=totalRevenue`);
    const fees = response.data
    let message = '';
    console.log(fees)

    console.log("??????????????????????")
    message += `Protocol Name: ${fees.name}\n`;
    if (fees.address) {
      message += `Address: ${fees.address}\n`;
    }
    if (fees.chains) {
      message += `Chain: ${(fees.chains)}\n`;
    }
    if (fees.url) {
      message += `Website: ${(fees.url)}\n`;
    }
    message += `Total 24H fees: ${formatter.format(fees.total24h)}\n`;
    message += `Total 7d fees: ${formatter.format(fees.total14dto7d)}\n`;
    if (fees.change_1d) {

      message += `Change: ${fees.change_1d}%\n`;
    }

    sendMessage(chatId, message);
  } catch (error) {
    console.error(error);
    sendMessage(chatId, 'Error fetching data');
  }
});
bot.onText(/\/summary (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  let args = match[1]; // the captured "whatever"

  // Replace spaces with hyphens and convert to lowercase
  args = args.replace(/\s+/g, '-').toLowerCase();
  try {
    // const response = await fetch("https://api.llama.fi/fees")
    const revresponse = await axios.get(`https://api.llama.fi/summary/fees/${args}?dataType=dailyRevenue`);
    const rev = revresponse.data
    const feeresponse = await axios.get(`https://api.llama.fi/summary/fees/${args}?dataType=dailyFees`);
    const fees = feeresponse.data
    let message = '';
    console.log("??????????????????????")
    message += `Protocol Name: ${rev.name}\n`;
    if (rev.address) {
      message += `Address: ${rev.address}\n`;
    }
    if (fees.chains) {
      message += `Chain: ${(fees.chains)}\n`;
    }
    if (fees.url) {
      message += `Website: ${(fees.url)}\n`;
    }
    message += `Total 24H fees: ${formatter.format(fees.total24h)}\n`;
    message += `Total 7d fees: ${formatter.format(fees.total14dto7d)}\n`;
    if (fees.change_1d) {
      message += `Fee change: ${fees.change_1d}%\n`;
    }
    if (rev.total24h) {
      message += `24h Revenue: ${formatter.format((rev.total24h))}\n`;
    }
    if (rev.total14dto7d) {
      message += `7d Revenue: ${formatter.format((rev.total14dto7d))}\n`;
    }
    console.log(rev)
    sendMessage(chatId, message);
  }

  catch (error) {
    console.error(error);
    sendMessage(chatId, 'Error fetching data');
  }
});


function sendMessage(chatId: number, message: string) {
  const MAX_MESSAGE_LENGTH = 4096;
  if (message.length > MAX_MESSAGE_LENGTH) {
    let messageParts = message.match(new RegExp('.{1,' + MAX_MESSAGE_LENGTH + '}', 'g'));
    for (let part of messageParts) {
      bot.sendMessage(chatId, part);
    }
  } else {
    bot.sendMessage(chatId, message);
  }
}

