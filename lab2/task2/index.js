let longString = {
    [Symbol.replace](string) {
        return string.length > 15 ? string.slice(0, 15) + "…" : string;
    }
}

console.log("lionel messi is the best player in the history".replace(longString))
console.log("leo messi".replace(longString))
