import hxz from 'hxz-api'

let handler = async(m,{text, conn, usedPrefix, command}) => {
if (!text) throw `Ejemplo de uso ${usedPrefix}${command}\nhttps://vt.tiktok.com/ZGJBtcsDq/`
let p = await  hxz.ttdownloader(text)
const { nowm, wm, audio } = p
conn.sendFile(m.chat, audio, null, null, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tta)$/i

export default handler
