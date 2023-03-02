const tableSize = 8

const table = Array.from({length: tableSize}, () =>
  Array.from({length: tableSize}, () => 0)
);

const horseMoves = [
    [-2, -1], [-2, 1], [-1, -2], [-1, 2],
    [1, -2], [1, 2], [2, -1], [2, 1]
];

const validPosition = (line, column) => {
    return line >= 0 && line < tableSize && column >= 0 && column < tableSize && table[line][column] === 0
}

const fillCell = (line, column, value) => {
    const cell = document.querySelector(`#table tr:nth-child(${line + 1}) td:nth-child(${column + 1})`)
    cell.textContent = value
}

const showAWay = (line = 0, column = 0, counter = 1) => {
    table[line][column] = counter

    fillCell(line, column, counter)

    if(counter >= tableSize * tableSize) {
        return true
    }

    for(let i = 0; i < horseMoves.length; i++) {
        const [lineMove, columnMove] = horseMoves[i]
        const newLine = line + lineMove
        const newColumn = column + columnMove

        if(validPosition(newLine, newColumn)) {
            if(showAWay(newLine, newColumn, counter + 1)) {
                return true
            }
        }
    }

    table[line][column] = 0
    fillCell(line, column, '')

    return false
}

for(let i = 0; i < tableSize; i++) {
    const line = document.createElement('tr')
    line.classList.add('line')
    for(let j = 0; j < tableSize; j++) {
        const column = document.createElement('td')
        column.classList.add('column')
        line.appendChild(column)
    }
    document.querySelector('#table').appendChild(line)
}