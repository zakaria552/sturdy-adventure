const fs = require("fs/promises")
exports.getApi = (req, res, next) => {
    fs.readFile("endpoints2.json").then((content) => {
        console.log(content)
        console.log(process.ENV_NODE)
        res.status(200).send(JSON.parse(content))
    })
}