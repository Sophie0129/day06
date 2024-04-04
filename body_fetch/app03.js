const express = require("express");
const app = express();

console.log("dirname : ",__dirname)

app.set("views",__dirname+"/views");
app.set("view engine", "ejs")

let members = [
    {id : "aaa", pwd : "aaa", name : "홍길동a", addr : "a산골짜기"},
    {id : "bbb", pwd : "bbb", name : "홍길동b", addr : "b산골짜기"},
    {id : "ccc", pwd : "ccc", name : "홍길동c", addr : "b산골짜기"},
]

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/get_members", (req, res) =>{
    res.json(members);
})

const bodyparser = require("body-parser");
app.use(bodyparser.json());

app.post("/register",(req,res)=>{
    console.log("req.body : ", req.body)
    members = members.concat(req.body);
    res.json(1);
})

app.get("/search/:id", (req,res) => {
    console.log(req.params);
    const result = members.filter(mem => mem.id === req.params.id)
    console.log("result : ", result)
    res.json(result[0])

})
app.put("/modify", (req,res)=> {
    //update members set name=?, addr=?
    members = members.filter(mem => mem.id!== req.body.id)
    members = members.concat(req.body)
    res.json(1)
})
app.delete("/delete", (req, res)=> {
    //delete from table where id=id;
    members = members.filter(mem => mem.id !== req.body.id);
    res.json(1)
})

app.get("/view_member", (req, res) =>{
    
})

app.listen(3000, ()=>console.log("3000 시작"))