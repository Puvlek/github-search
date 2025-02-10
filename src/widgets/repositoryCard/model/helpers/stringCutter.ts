export const stringCutter = (string: string) => {
    if (string.length > 25) {
        return string.slice(0, 22) + '...'
    }
    return string
}