let handler = async (m, { conn }) => conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${(10).getRandom()} ${['segundo', 'minuto', 'hora', 'día', 'semana', 'mes', 'año', 'década', 'siglo'].getRandom()} otra vez ...
  `.trim(), m, m.mentionedJid ? {
    mentions: m.mentionedJid
} : {})

handler.help = ['', 'kah'].map(v => 'kapan' + v + ' <text>?')
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^kapan(kah)?$/i

export default handler
