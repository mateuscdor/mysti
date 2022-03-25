let handler = async (m, { command, text }) => m.reply(`
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${['Sí', 'Probablemente sí', 'Probablemente', 'Probablemente no', 'No', 'De ninguna manera'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['apakah <teks>?']
handler.tags = ['kerang']
handler.command = /^apakah$/i

export default handler
