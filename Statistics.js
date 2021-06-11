class Statistics {
    constructor() {
        this.gameStats = [];
    }

    addToStats(win) {
        let gameStat = win;
        this.gameStats.push(gameStat);

    }
    showGameStatistics() {
        let games = this.gameStats.length;
        let wins = this.gameStats.filter(result => result).length;
        let losses = this.gameStats.filter(result => !result).length;
        return [games, wins, losses];
    }
}