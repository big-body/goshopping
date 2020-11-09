const { shangpin } = require("../../../mongodb/shangpin.js")
module.exports = async (req, res) => {
    // console.log(req.query);

    //接收前端传递过来的页数,代表前端请求那一页的数据
    let page = Number(req.query.page) || 1
    //size可以代表每页显示多少条数据
    let size = Number(req.query.size) || 5
    //查询数据库中User集合中总共有多少条数据
    let total = await Product.countDocuments({
        username: new RegExp(req.query.title, "gi"),
        money: { $gt: req.query.money1, $lt: req.query.money2 }
    })

    // console.log(total);
    let startpage = (page - 1) * size

    let min = req.query.money1 || 0
    let max = req.query.money2 || 100000000
    // 计算总的页数
    let totalPage = Math.ceil(total / size)

    //查询数据
    const result = await Product.find({
        username: new RegExp(req.query.username, "gi"),
        money: { $gt: min, $lt: max }
    }).limit(size).skip(startpage)
    // console.log(result);

    res.render("./admin/shangpin/spflsearch.ejs", {
        total: total,
        page: page,
        size: size,
        totalPage: totalPage,
        productListDatas: result
    })
}