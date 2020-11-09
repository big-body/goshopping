const mongoose = require("mongoose");
require("./database")
//创建一个用户集合规则
const shangpinSchema = new mongoose.Schema({
    username: {  //名字
        type: String,   //类型
        required: [true, "用户名不能为空"],  //开启验证
        trim: true   //去除空格
    },
    pic: {  //图
        type: String
    },
    money: {  //费用
        type: String
    },
    number: { //数量
        type: String
    },
    adress: { //生长地址
        type: String
    }
})

//使用集合规则创建集合
const shangpin = mongoose.model('shangpin', shangpinSchema);

//暴露
module.exports = {
    shangpin
}