module.exports = function reverse(n) {
    const num = Math.abs(n).toString();
    return Number(num.split("").reverse().join(""));
};
