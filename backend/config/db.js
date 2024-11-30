/*
 Configure MySQL Database
 @author: xuhaixiang
 @time:2022-7-23
 */
const MySQL =require('mysql')
const conn = MySQL.createConnection({
    host:'1',
    port:'3306',
    user:'TencentDB',
    password:'2b',
    database:'tencentdb'
})
module.exports = conn

// 连接数据库
conn.connect();
// 查询TestTable
const query = "SELECT * FROM TestTable"

conn.query(query, function (error, results, fields){
    if(error)throw error;
    console.log(results)

})

conn.end()
