
let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './Menu2.jpg'
let username = conn.getName(who)
let estado =`
╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨𝗛ola, ${username}!!*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┃ *<MENU +18/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🔞 _${usedPrefix}nsfwloli_
┣ ඬ⃟🔞 _${usedPrefix}nsfwahegao_
┣ ඬ⃟🔞 _${usedPrefix}nsfwass_
┣ ඬ⃟🔞 _${usedPrefix}nsfwbdsm_
┣ ඬ⃟🔞 _${usedPrefix}nsfwblowjob_
┣ ඬ⃟🔞 _${usedPrefix}nsfwcuckold_
┣ ඬ⃟🔞 _${usedPrefix}nsfwcum_
┣ ඬ⃟🔞 _${usedPrefix}nsfwero_
┣ ඬ⃟🔞 _${usedPrefix}nsfwfemdom_
┣ ඬ⃟🔞 _${usedPrefix}nsfwfoot_
┣ ඬ⃟🔞 _${usedPrefix}nsfwgangbanh_
┣ ඬ⃟🔞 _${usedPrefix}nsfwglasses_
┣ ඬ⃟🔞 _${usedPrefix}nsfwhentai_
┣ ඬ⃟🔞 _${usedPrefix}nsfwjahy_
┣ ඬ⃟🔞 _${usedPrefix}nsfwmanga_
┣ ඬ⃟🔞 _${usedPrefix}nsfwmstb_
┣ ඬ⃟🔞 _${usedPrefix}nsfwneko_
┣ ඬ⃟🔞 _${usedPrefix}nsfworgy_
┣ ඬ⃟🔞 _${usedPrefix}nsfwpanties_
┣ ඬ⃟🔞 _${usedPrefix}nsfwpussy_
┣ ඬ⃟🔞 _${usedPrefix}nsfwneko2_
┣ ඬ⃟🔞 _${usedPrefix}nsfwtentacles_
┣ ඬ⃟🔞 _${usedPrefix}nsfwthings_
┣ ඬ⃟🔞 _${usedPrefix}nsfwyuri_
┣ ඬ⃟🔞 _${usedPrefix}nsfwzettai_
┣ ඬ⃟🔞 _${usedPrefix}loli_
┣ ඬ⃟🔞 _${usedPrefix}_
┣ ඬ⃟🔞 _${usedPrefix}_
┣ ඬ⃟🔞 _${usedPrefix}_
┣ ඬ⃟🔞 _${usedPrefix}_
┣ ඬ⃟🔞 _${usedPrefix}_
┣ ඬ⃟🔞 _${usedPrefix}_
┣ ඬ⃟🔞 _${usedPrefix}_
┣ ඬ⃟🔞 _${usedPrefix}_
┣ ඬ⃟🔞 _${usedPrefix}_
┣ ඬ⃟🔞 _${usedPrefix}_
┣ ඬ⃟🔞 _${usedPrefix}_
┣ ඬ⃟🔞 _${usedPrefix}_
┣ ඬ⃟🔞 _${usedPrefix}_
┗━━━━━━━━━━━━━┛
`.trim()

conn.sendHydrated(m.chat, estado, '🧿 𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝 🔮', picture, 'https://chat.whatsapp.com/E9qJfvlLjENKAxnhII9rao', 'GRUPO', null, null, [
['MENÚ PRINCIPAL', '/menu'],
['MENÚ SIMPLE', '/menusimple'],
['MENÚ AUDIOS', '/menu2']
], m)}

handler.command = /^(Menu18|18|menu18|MENU18)$/i
export default handler
