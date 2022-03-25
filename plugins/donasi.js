let handler =  m => m.reply(`
╭─「     Donar     」
│ • Se necesita Numeros para el Bot
│ • asi quieres ayudar wa.me/51977783315
╰────

╭─「     Donar     」
│ • Gracias 
│ • Quetengas un buen dia, tarde o noche 🙂
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
