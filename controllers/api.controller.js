const fs = require("fs/promises")
exports.getApi = (req, res, next) => {
    fs.readFile("endpoints2.json").then((content) => {
        console.log((content.toString()))
        res.status(200).send(content.toString())
    })
}