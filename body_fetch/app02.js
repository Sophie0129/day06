const express = require("express");
const app = express();

console.log("dirname : ",__dirname)

app.set("views",__dirname+"/views");
app.set("view engine", "ejs")

let count=0;

app.get("/non_fetch",(req, res) => {
    console.log("non_fetch 연동")
    count++;
    res.render("non_fetch", {count})
})

app.get("/fetch01", (req, res)=>{
    console.log("fetch01 : ", count++);
    res.render("fetch01",{count})
})

app.get("/get_count", (req, res)=>{
    console.log("get_count : ", count++);
    //res.render("fetch01",{count})
    res.json({cnt : count})
})
/*

get : 데이터 얻어올때
post : 추가
put : 수정
delete : 삭제

*/

app.get("/rest", (req, res)=>{
    res.render("rest")
})
app.get("/test",(req,res)=>{
    res.json("get 데이터 요청할 때")
})
app.post("/test",(req,res)=>{
    res.json("get 데이터 추가할 때")
})
app.put("/test",(req,res)=>{
    res.json("get 데이터 수정할 때")
})
app.delete("/test",(req,res)=>{
    res.json("get 데이터 삭제할 때")
})

app.listen(3000, () => console.log("서버 3000"));