const path = require('path');

const version2Bundle = {
    entry: './version2/gameState.js',
    mode: 'development',
    target: 'web',
    output: {
        filename: 'gameStateBundle.js',
        library: 'gameState',
        path: path.resolve(__dirname, 'version2')
    }
}

module.exports = [version2Bundle];