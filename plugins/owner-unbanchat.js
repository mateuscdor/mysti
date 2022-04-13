let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('*✅ Listo.. chat desbaneado!*')
}
handler.help = ['unbanchat']
handler.tags = ['group', 'owner']
handler.command = /^unbanchat$/i
handler.admin = 1

export default handler
