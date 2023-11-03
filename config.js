module.exports = {
    app: {
        token: 'NzcwNjYzMDMwNzM5NDM1NTMw.G2CdlZ.3B6h4a2RLDuPJSLjpEpSh1lUjgfs8CyCgqrIzo',
        playing: 'by plexdx ❤️',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
