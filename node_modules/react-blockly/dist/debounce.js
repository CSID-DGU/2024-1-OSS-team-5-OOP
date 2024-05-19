export default function debounce(func, wait) {
    var timeout = null;
    var later = null;
    var debouncedFunction = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        later = function () {
            timeout = null;
            func.apply(void 0, args);
        };
        if (timeout != null) {
            clearTimeout(timeout);
        }
        timeout = window.setTimeout(later, wait);
    };
    var cancel = function () {
        if (timeout != null) {
            clearTimeout(timeout);
            if (later) {
                later();
            }
        }
    };
    return [debouncedFunction, cancel];
}
