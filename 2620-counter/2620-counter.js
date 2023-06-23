/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = function(n) {
    const criteria = n
    return () => n++;
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */