const sumAll = function(startNum, endNum) {
    let finNum = 0;
    if (startNum < 0 || endNum < 0) return "ERROR"
    if (typeof startNum !== "number" || typeof endNum !== "number") return "ERROR"
    if (startNum > endNum) {
        let temporary = endNum;
        endNum = startNum;
        startNum = temporary;

    }
    for (let i = startNum; i <= endNum; i++) {
        finNum += i
    }
    
    return finNum
};

// Do not edit below this line
module.exports = sumAll;
