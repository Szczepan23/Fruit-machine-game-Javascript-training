class Wallet {
    constructor(money) {
        let _money = money;
        this.showMyActualWallet = () => _money;
        this.changeWallet = (bid, type = '+') => {
            if (type === '+') return _money += bid;
            else if (type === '-') return _money -= bid;
        }
        this.checkCanPlay = (bid, money) => {
            if (bid > money || this.showMyActualWallet(money) <= 0) return true;
        }
    }
}