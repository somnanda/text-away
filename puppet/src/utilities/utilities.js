function isDev() {
    if (process.env.NODE_ENV === 'DEV') {
        return true;
    } else {
        return false;
    }
}

module.exports = { isDev }