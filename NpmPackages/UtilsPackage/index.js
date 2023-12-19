//大小寫轉換
function snakeToCamel(str) {
    return str.replace(/((_)[a-z])/g, (group) => group[1].toUpperCase())
}

function camelToSnake(str) {
    return str.replace(/([A-Z])/g, "_$1").toLowerCase()
}

//取最大公因數
function getGCD(a, b) {
    if (a === 0) return b
    return getGCD(b % a, a)
}

//最小公倍數
function getLCM(a, b) {
    return a * b / getGCD(a, b)
}


function isObject(obj) {
    return obj === Object(obj) && !Array(obj) && typeof obj !== 'function';
}

function isArray(obj) {
    return Array.isArray(obj);
}

export default {
    snakeToCamel,
    camelToSnake,
    getGCD,
    getLCM,
    isObject,
    isArray,
};

