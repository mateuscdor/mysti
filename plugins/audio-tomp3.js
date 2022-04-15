import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `responda el video/nota de voz que desea convertir a audio/mp3 con el título *${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw 'No puedo descargar medios'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw 'No puedo convertir medios a audio'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['audio']

handler.command = /^to(mp3|a(udio)?)$/i

export default handler
