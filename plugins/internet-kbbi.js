import { kbbi } from '@bochilteam/scraper'

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Example use ${usedPrefix}${command} halo`
    const res = await kbbi(text)
    m.reply(`
${res.map(v => `
*📌${v.title}*

${v.means.map(v => '- ' + v).join('\n`')}
`).join('\n').trim()}

Notas:
p = Partículas: clase de palabra que incluye preposiciones, conjunciones, interjecciones, artículos, saludos
n = sustantivo: sustantivo
`.trim())
}
handler.help = ['kbbi <teks>']
handler.tags = ['internet']
handler.command = /^kbbi$/i

export default handler
