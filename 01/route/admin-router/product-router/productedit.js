//修改产品模块
const { Product } = require("../../../mongodb/product.js")
module.exports = async (req, res) => {
    console.log(req.query);  //{ id: '5f9fc7ad26c9e82f8c9c2162' }
    let result = await Product.findOne({ "_id": req.query.id })
    console.log(result);
    res.render("./admin/product/productedit.ejs",{
        editDatas:result
    })
}