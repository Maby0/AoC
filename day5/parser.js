const fs = require('fs');
const coordsStrArray = fs.readFileSync('./data.txt').toString().split("\n").map(coords => coords.split(" -> "))
const coordsHash = coordsStrArray.map(coords => {
    let startSplit = coords[0].split(",")
    let endSplit = coords[1].split(",")
    return {
        xStart: startSplit[0],
        yStart: startSplit[1],
        xEnd: endSplit[0],
        yEnd: endSplit[1]
    }
})

// FILTERING OUT COORDS WHERE x1 != x2 || y1 != y2

const filteredCoordsHash = coordsHash.filter(coords => coords.xStart === coords.xEnd || coords.yStart === coords.yEnd)

module.exports = { coordsHash, filteredCoordsHash }