
const TimeLimitedCache = function() {
    // use object for fast access
    this.cacheStore = { };
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let isSet = this.cacheStore[key] ? true : false
    if (isSet) clearTimeout(this.cacheStore[key]['timer']);
        
    this.cacheStore[key] = { val: value, timer: null };
    this.cacheStore[key]['timer'] = setTimeout(() => {
        delete this.cacheStore[key];
    }, duration);
    
    return isSet
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.cacheStore[key] ? this.cacheStore[key]['val'] : -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return Object.keys(this.cacheStore).length
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */