let handler = async (m, { conn, text}) => {
    if (!text) throw '*A QUIEN QUIERE DESBANEAR?*'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Etiqueta a alguien'
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `berhasil unbanned`, m)
}
handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.rowner = true

export default handler
