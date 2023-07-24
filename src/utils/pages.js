export function getPageCount(totalCount, limit) {
    return Math.ceil(totalCount / limit)
}

export function getPagesArray(pages) {
    let result = []
    for (let i = 1; i <= pages; i++) {
        result.push(i)
    }
    return result
}