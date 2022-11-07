module.exports = function (api) {
    // The API exposes the following:

    // Cache the returned value forever and don't call this function again.
    api.cache(true);

    return {
        plugins: ['macros'],
    }
}
