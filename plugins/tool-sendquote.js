async function handler(m) {
    if (!m.quoted) throw 'responder mensajes!'
    let q = await m.getQuotedObj()
    if (!q.quoted) throw '¡El mensaje al que está respondiendo no contiene una respuesta!'
    await q.quoted.copyNForward(m.chat, true)
}
handler.command = /^q$/i

export default handler
