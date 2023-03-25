const randomNu6 = () => {
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math
    .random() * (maxm - minm + 1)) + minm;
}
const randomNu5 = () => {
    var minm = 10000;
    var maxm = 99999;
    return Math.floor(Math
    .random() * (maxm - minm + 1)) + minm;
}
const randomNu4 = () => {
    var minm = 1000;
    var maxm = 9999;
    return Math.floor(Math
    .random() * (maxm - minm + 1)) + minm;
}


 
module.exports = {randomNu6 , randomNu5 , randomNu4}