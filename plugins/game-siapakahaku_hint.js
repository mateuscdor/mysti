let handler = async (m, { conn }) => {
    conn.Quién soy = conn.Quién soy ? conn.quién soy : {}
    let id = m.chat
    if (!(id in conn.siapakahaku)) throw false
    let json = conn.siapakahaku[id][1]
    let ans = json.jawaban
    let clue = ans.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_')
    m.reply('```' + pista + '```')
}
handler.command = /^who$/i

handler.limit = true

export default handler
