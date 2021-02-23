const { Telegraf } = require('telegraf')


const bot = new Telegraf('1667893274:AAE3wuQcjzE9qOllwpyELn6sfIiTdoQVhhY')

bot.start((ctx) => {
  ctx.reply('Bienvenidod a MDY')
})

bot.help((ctx) => {
  ctx.reply('Bienvenidod a MDY Help')
})

bot.settings((ctx) => {
  ctx.reply('Bienvenidod a MDY settings')
})

bot.command(['Hola', 'hola', 'ola', 'Ola', 'Holaa', 'holaa', 'Holaaa', 'holaaa'], (ctx) => {
  ctx.reply('Hola Como estas ?')
})

bot.hears(['Hola', 'hola', 'ola', 'Ola', 'Holaa', 'holaa', 'Holaaa', 'holaaa'], ctx => {
  ctx.reply(`Hola ${ctx.from.first_name}, bienvenido a MDY`)
})

bot.on('sticker', ctx => {
  ctx.reply('Lo siento no entiendo stickers')
})

bot.launch()