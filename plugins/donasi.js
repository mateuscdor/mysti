let handler =  m => m.reply(`
╭─「     Donar     」
│ • Necesito numeros para crear bots
│ • A cambio se le puede crear un bot
╰────

╭─「     Donar     」
│ • si estas interesado al priv de este numero wa.me/51977783315
│ • Quetengas un buen dia, tarde o noche 🙂
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
