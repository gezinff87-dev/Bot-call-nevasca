const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
  name: 'leave',
  description: 'Faz o bot sair da call de voz.',

  async execute(message) {
    try {
      const connection = getVoiceConnection(message.guild.id);
      if (!connection) return message.reply('❌ Não estou em nenhuma call.');

      connection.destroy();
      message.reply('👋 Saí da call!');
    } catch (err) {
      console.error('Erro no comando leave:', err);
      message.reply('⚠️ Não consegui sair da call.');
    }
  },
};
