const express = require("express");
//创建一个express路由对象
const router = express.Router()

//配置路由

//登录页面
router.get("/login", require("./admin-router/user-router/login"))
//点击登录按钮提交表单请求数据
router.post("/dologin", require("./admin-router/user-router/dologin"))

//用户列表
router.get("/userlist", require("./admin-router/user-router/userlist"))
//添加用户
router.get("/adduser", require("./admin-router/user-router/adduser.js"))
//添加用户提交数据的地址
router.post("/doadduser", require("./admin-router/user-router/doadduser.js"))

//删除用户
router.post("/deleteuser", require("./admin-router/user-router/deleteuser.js"))


//修改用户
router.get("/edituser", require("./admin-router/user-router/edituser.js"))
//点击确定修改按钮提交数据，更新数据库接口
router.post("/doedituser", require("./admin-router/user-router/doedituser.js"))
//用户搜索路由
router.get("/searchuser", require("./admin-router/user-router/searchuser.js"))

router.get("/logout", (req, res) => {
    req.session.destroy()  //销毁session
    res.redirect("/admin/login")
})


//商品列表
router.get("/productlist", require("./admin-router/product-router/productlist.js"))
//添加产品-页面
router.get("/productadd", require("./admin-router/product-router/productadd.js"))
//添加产品-提交数据
router.post("/doproductadd", require("./admin-router/product-router/doproductadd.js"))

//修改产品
router.get("/productedit", require("./admin-router/product-router/productedit.js"))
//修改商品-提交数据
router.post("/doeditproduct", require("./admin-router/product-router/doeditproduct.js"))
//删除产品
router.get("/productdelete", require("./admin-router/product-router/productdelete.js"))
//搜索产品
router.get("/productsearch", require("./admin-router/product-router/productsearch.js"))



//商品列表
router.get("/spfllist", require("./admin-router/spfl-route/spfllist.js"))
//商品分类-页面
router.get("/spfladd", require("./admin-router/spfl-route/spfladd.js"))
//添加商品-提交数据
router.post("/dospfladd", require("./admin-router/spfl-route/dospfladd.js"))
//修改商品
router.get("/spfledit", require("./admin-router/spfl-route/spfledit.js"))
//修改商品-提交数据
router.post("/doeditspfl", require("./admin-router/spfl-route/doeditspfl.js"))
//删除商品
router.get("/spfldelete", require("./admin-router/spfl-route/spfldelete.js"))
//搜索商品
router.get("/spflsearch", require("./admin-router/spfl-route/spflsearch.js"))



//暴露
module.exports = router