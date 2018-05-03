const db = require('../models');

module.exports = {
    find: (req, res) => {
        db.User.findOne({username: "Ximon"})
        .then(dbModel => res.json(dbModel));
    }
}