const edges = [
    [2, 1], [1, 2], [-1, 2], [-2, 1],
    [-2, -1], [-1, -2], [1, -2], [2, -1]
];

const isWithinBounds = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8

const shortestPath = (start, end) => {

    const visited = new Set()

    const queue = [[start, [start]]]

    while (queue.length > 0) {
        const [[x, y], path] = queue.shift()

        if (x === end[0] && y === end[1]) return `You made it in ${path.length - 1} moves! Here's your path:\n${path.map(pos => `[${pos}]`).join('\n')}`;

        for (let [dx, dy] of edges) {
            const nextX = x + dx
            const nextY = y + dy
            const nextPos = [nextX, nextY]

            if (isWithinBounds(nextX, nextY) && !visited.has(nextPos.toString())) {
                visited.add(nextPos.toString());
                queue.push([nextPos, path.concat([nextPos])]);
            }

        }

    }
    return -1

}


console.log(shortestPath([3, 3], [4, 3]));