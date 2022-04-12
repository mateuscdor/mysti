let handler = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    if (user.health >= 100) return m.reply(`
Your ❤️health is full!
`.trim())
    const heal = 40 + (user.cat * 4)
    let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((100 - user.health) / heal)))) * 1
    if (user.potion < count) return m.reply(`
Tu 🥤Potion no es suficiente, solo tienes *${user.potion}* 🥤Potion
escriba *${usedPrefix}buy potión ${count - user.potion}* para comprar 🥤Potion
`.trim())
    user.potion -= count * 1
    user.health += heal * count
    m.reply(`
Uso exitoso de *${count}* 🥤Potion(s)
`.trim())
}

handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal)$/i

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
