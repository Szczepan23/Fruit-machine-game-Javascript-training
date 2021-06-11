class Game {
    constructor(money) {
        this.wallet = new Wallet(money);
        this.stats = new Statistics();
        document.getElementById('start').addEventListener('click', this.startGame.bind(this));
        this.boards = document.querySelectorAll('.color');
        this.inputBid = document.getElementById('bid');
        this.spanWallet = document.querySelector('.wallet');
        this.spanResult = document.querySelector('.result');
        this.spanNumber = document.querySelector('.number');
        this.spanWins = document.querySelector('.win');
        this.spanLosses = document.querySelector('.loss');

        this.render();

    }
    render(colors = ['pink', 'pink', 'pink'], wallet = this.wallet.showMyActualWallet(), result = "", bid = 0, wonMoney = 0, games = 0, wins = 0, losses = 0) {
        this.boards.forEach((board, index) => board.style.backgroundColor = colors[index]);
        this.spanWallet.textContent = wallet;

        if (result) {
            this.spanResult.textContent = `Wygrałeś ${wonMoney} zł`;
        } else if (!result && result !== "") {
            this.spanResult.textContent = `Przegrałeś ${bid} zł`
        };
        this.spanNumber.textContent = games;
        this.spanWins.textContent = wins;
        this.spanLosses.textContent = losses;

    }
    startGame() {
        if (this.inputBid.value < 1) return alert("Wpisana kwota jest za niska")
        const bid = Math.floor(this.inputBid.value);
        const money = this.wallet.showMyActualWallet();
        if (this.wallet.checkCanPlay(bid, money)) return alert("Masz za mało środków na taki zakład");
        this.wallet.checkCanPlay(bid, money);
        this.wallet.changeWallet(bid, '-');
        this.draw = new Draw();
        const colors = this.draw.getDrawColors();
        const win = Result.checkWhoWon(colors);
        const wonMoney = Result.gameRules(win, bid);
        this.stats.addToStats(win);
        const gameStats = this.stats.showGameStatistics();
        const games = gameStats[0];
        const wins = gameStats[1];
        const losses = gameStats[2];
        this.wallet.changeWallet(wonMoney, '+');
        this.render(colors, this.wallet.showMyActualWallet(), win, bid, wonMoney, games, wins, losses);
    }
}