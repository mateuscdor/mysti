const items = {
    buy: {
        limit: {
            exp: 999
        },
        potion: {
            money: 1250,
        },
        trash: {
            money: 4,
        }
    },
    sell: {
        potion: {
            money: 125,
        },
        trash: {
            money: 2
        }
    }
}

let handler = async (m, { command, usedPrefix, args }) => {
    let user = global.db.data.users[m.sender]
    const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
    const info = `
Usar formato *${usedPrefix}${command} [crate] [count]*
ejemplo de uso: *${usedPrefix}${command} potion 10*
    
📍lista de elementos: 
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `${global.rpg.emoticon(v)}${v} | ${listItems[v][paymentMethod]} ${global.rpg.emoticon(paymentMethod)}${paymentMethod}`.trim()
    }).join('\n')}
`.trim()
    const item = (args[0] || '').toLowerCase()
    const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!listItems[item]) return m.reply(info)
    if (command.toLowerCase() == 'buy') {
        let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        if (user[paymentMethod] < listItems[item][paymentMethod] * total) return m.reply(`no tienes suficiente ${global.rpg.emoticon(paymentMethod)}${paymentMethod} comprar *${total}* ${global.rpg.emoticon(item)}${item}. Necesitas *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* más ${paymentMethod} para poder comprar`)
        user[paymentMethod] -= listItems[item][paymentMethod] * total
        user[item] += total
        return m.reply(`Tú compraste *${total}* ${global.rpg.emoticon(item)}${item}`)
    } else {
        if (user[item] < total) return m.reply(`no tienes suficiente *${global.rpg.emoticon(item)}${item}* para vender, solo tienes ${user[item]} items`)
        user[item] -= total
        user.money += listItems[item].money * total
        return m.reply(`You sold *${total}* ${global.rpg.emoticon(item)}${item}`)
    }
}

handler.help = ['buy', 'sell'].map(v => v + ' [item] [count]')
handler.tags = ['rpg']
handler.command = /^(buy|sell)$/i

handler.disabled = false

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
