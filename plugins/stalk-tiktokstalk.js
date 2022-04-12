import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Ingrese el nombre de usuario', m)

    let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=rey2k22`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let thumb = await (await fetch(json.result.user_picture)).buffer()
    m.reply(`
Nombre de usuario: ${json.result.username}
Apodo: ${json.result.nickname}
Seguidores: ${json.result.followers}
Siguiendo: ${json.result.followings}
Likes: ${json.result.likes}
Video: ${json.result.video}
biografía: ${json.result.bio}
`.trim())
}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiktokstalk|ttstalk)$/i

export default handler
