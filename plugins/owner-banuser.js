let handler = async (m, { conn, text }) => {
    if (!text) throw '*A QUIEN QUIERE BANEAR?*'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Etiqueta a alguien'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `berhasil banned`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true

export default handler
