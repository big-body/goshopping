//formidable解析表单提交的文件数据
//下载模块
//cnpm install formidable --save
//引入formidable模块
let formidable = require("formidable");
const { shangpin } = require("../../../mongodb/shangpin.js")
let path = require("path")
// console.log(formidable);
module.exports = (req, res) => {
    //1、创建一个表单解析对象
    let form = new formidable.IncomingForm()
    //2、配置上传文件存放位置，放置在public文件夹下面的uploads
    form.uploadDir = path.join(__dirname, "../", '../', '../', "public", "uploads");
    //3、保存上传文件的后缀 
    form.keepExtensions = true
    form.parse(req, async (err, fields, files) => {
        // console.log(fields);  //文本数据
        // console.log(files.pic.name);   //根据files.pic.name是否为空来判断是否修改了图片，为空没有修改图片，否则就是修改了图片

        if (!files.pic.name) {  //没有修改图片
            var result = await shangpin.updateOne({ "_id": req.query.id }, {
                username: fields.username,
                number: fields.number,
                money: fields.money,
                adress: fields.adress,
            })
        } else if (files.pic.name) { //修改了图片
            var result = await shangpin.updateOne({ "_id": req.query.id }, {
                username: fields.username,
                pic: files.pic.path.split("public")[1],
                number: fields.number,
                money: fields.money,
                adress: fields.adress
            })
        }

        if (result) {
            res.redirect("/admin/spfllist")
        }

    })
}