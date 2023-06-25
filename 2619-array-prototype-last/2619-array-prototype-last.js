Array.prototype.last = function() {
    const length = this.length;
    return length !== 0 ? this[length-1] : -1
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */