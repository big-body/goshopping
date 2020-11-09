const { User } = require("../../../mongodb/user")
module.exports = async (req, res) => {
    console.log(req.body);
    let result = await User.findOneAndDelete({ "_id": req.body.id })
    if (result) {
        res.redirect("/admin/userlist")
    }
}