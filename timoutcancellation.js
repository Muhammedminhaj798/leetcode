// Given a function fn, an array of arguments args,
//  and a timeout t in milliseconds, return a cancel function cancelFn.

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    const x = function(){
        clearTimeout(timer);
    }
    const timer = setTimeout(() => {
        fn(...args)
    }, t);
    return x;
};

