const { shangpin } = require("../../../mongodb/shangpin")
module.exports = async (req, res) => {
    let result = await shangpin.findOneAndDelete({ "_id": req.query.id })
    if (result) {
        res.redirect("/admin/spfllist")
    }
}