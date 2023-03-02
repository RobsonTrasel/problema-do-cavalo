const tableSize = 8

const table = Array.from({
    length: tableSize
}, () => {
    Array.from({
        length: tableSize
    })
}, () => 0)

const horseMoves = [
    [-2, -1], [-2, 1], [-1, -2], [-1, 2],
    [1, -2], [1, 2], [2, -1], [2, 1]
];

const validPosition = (line, column) => {
    return line >= 0 && line < tableSize && column >= 0 && column < tableSize && table[line][column] === 0
}