const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
  name: 'join',
  description: 'Faz o bot entrar na call do usuário.',

  async execute(message) {
    try {
      const voiceChannel = message.member.voice.channel;
      if (!voiceChannel) return message.reply('❌ Você precisa estar em uma call para eu entrar!');

      joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator,
      });

      message.reply(`🎧 Entrei em **${voiceChannel.name}**!`);
    } catch (err) {
      console.error('Erro no comando join:', err);
      message.reply('⚠️ Não consegui entrar na call.');
    }
  },
};
