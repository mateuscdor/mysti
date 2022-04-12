let handler = async (m, { conn }) => {
    if (!m.quoted) throw '¿dónde está el mensaje?'
    if (m.quoted.mtype !== 'viewOnceMessage') throw 'Eso no es un mensaje viewOnce'
    const msg = await conn.loadMessage(m.quoted.id)
    if (!msg) throw 'can\'t open message!'
    await conn.copyNForward(m.chat, msg, true, { readViewOnce: true })
}

handler.help = ['readviewonce']
handler.tags = ['tools']
handler.command = /^readviewonce/i

export default handler
