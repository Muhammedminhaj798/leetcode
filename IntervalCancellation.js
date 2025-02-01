// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

var cancellable = function(fn, args, t) {
    fn(...args);
    let timer = setInterval(() => fn(...args), t);

    let cancelFn = () => clearInterval(timer);
    return cancelFn;
};
