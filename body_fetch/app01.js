const express = require("express");
const bcrypt = require("bcrypt");
const app = express();

app.get("/", (req,res)=>{
    const pwd = "test";
    /*const changePwd = bcrypt.hash(pwd, 10); //hash 비동기
    console.log(changePwd);
    changePwd.then(res => console.log(res))
    */
    const changePwd = bcrypt.hashSync(pwd, 10); //hashSync 동기
    //괄호 두번째의 숫자가 높을수록 암호화가 복잡해진다.
    //숫자가 높을수록 로딩시간이 길다
    console.log(changePwd);
    const result = bcrypt.compareSync(pwd, changePwd) //사용자값, 데이터값 순
    console.log(result); //둘이 같아서 true
    res.send("/경로")
})

app.listen(3000, ()=>console.log("3000 실행"))