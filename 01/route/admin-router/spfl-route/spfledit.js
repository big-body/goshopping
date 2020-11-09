//修改产品模块
const { shangpin } = require("../../../mongodb/shangpin.js")
module.exports = async (req, res) => {
    console.log(req.query);  //{ id: '5f9fc7ad26c9e82f8c9c2162' }
    let result = await shangpin.findOne({ "_id": req.query.id })
    console.log(result);
    res.render("./admin/shangpin/spfledit.ejs",{
        editDatas:result
    })
}