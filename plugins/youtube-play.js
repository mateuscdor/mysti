import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Ejemplo ${usedPrefix}${command} MR Beast`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'VΓ­deo/Audio no encontrado'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
π *Titulo:* ${title}
π *Url:* ${url}
πΉ *Descripcion:* ${description}
β²οΈ *Publicado:* ${publishedTime}
β *Duracion:* ${durationH}
ποΈ *Vistas:* ${viewH}
  `.trim(), author, thumbnail, '', '', null, null, [
    ['πππππ', `${usedPrefix}yta ${url} yes`],
    ['πππππ', `${usedPrefix}ytv ${url} yes`]
  ], m, { asLocation: 1 })
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = false

export default handler

