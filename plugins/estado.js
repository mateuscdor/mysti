let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './Menu2.jpg'
let estado =`
*ミ💖 Hola estimado usuario 💖彡*

*ミ🤖 Estado del Bot 🤖彡*
*=> Bot activo ✔️*
*=> Bot uso público ✔️*
`.trim()

conn.sendHydrated(m.chat, estado, '🧿 𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝 🔮', picture, 'https://chat.whatsapp.com/E9qJfvlLjENKAxnhII9rao', 'GRUPO', null, null, [
['MENÚ PRINCIPAL', '/menu'],
['MENÚ SIMPLE', '/menusimple'],
['MENÚ AUDIOS', '/menu2']
], m)}

handler.command = /^(estado|status|estate|state|stado|stats)$/i
export default handler
