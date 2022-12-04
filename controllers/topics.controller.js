const {selectTopics} = require("../models/topics.model")
const {selectUserByUsername} = require("../models/users.model")

exports.getTopics = (req, res) => {
    return selectTopics().then((topics) => {
        res.status(200).send(topics)
    })
}