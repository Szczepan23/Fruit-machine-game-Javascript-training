class Result {
    static checkWhoWon = drawResult => {
        if (drawResult[0] === drawResult[1] && drawResult[1] === drawResult[2] || drawResult[0] !== drawResult[1] && drawResult[1] !== drawResult[2] && drawResult[0] !== drawResult[2]) return true;
        else return false;
    }
    static gameRules = (result, bid) => {
        if (result) return bid * 3;
        else if (!result) return 0;
    }
}