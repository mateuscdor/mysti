import {alquran} from '@bochilteam/scraper'
let handler = async (m, { args, usedPrefix, command }) => {
    if (!(args[0] || args[1])) throw `ejemplo:\n${usedPrefix + command} 1 2\n\nentonces el resultado es una sura Al-Fatihah verso 2 junto con el audio, y el verso es solo 1`
    if (isNaN(args[0]) || isNaN(args[1])) throw `ejemplo:\n${usedPrefix + command} 1 2\n\nentonces el resultado es la sura Al-Fatihah verso 2 junto con el audio, y el verso es solo 1`
    let api = await alquran()
    let mes = `
${api[args[0] - 1].ayahs[args[1] - 1].text.ar}
    
${api[args[0] - 1].ayahs[args[1] - 1].translation.id}
( Q.S ${api[args[0] - 1 ].asma.id.short} : ${api[args[0] - 1].ayahs[args[1] - 1].number.insurah} )
`.trim()
    m.reply(mes)
    conn.sendFile(m.chat, api[args[0] - 1].ayahs[args[1] - 1].audio.url, '', '', m)
}

handler.command = ['alquran']
handler.help = ['alquran']
handler.tags = ['quran']

export default handler
