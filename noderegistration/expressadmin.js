const express =require('express');
const app=express();
const fs =require('fs').promises
app.use(express.json());// middleware to convert incoming data into json
app.get("/",(req,res)=>
{
    res.json({msg:"hii"})
})
app.post("/register",async(req,res)=>{ 
    const{name,email,password}=req.body;
    console.log(name+email+password);
    res.json({msg:"reached"});
    let arr=[];
    const d1=await fs.readFile('student.json',{encoding:'utf-8'});
    arr=JSON.parse(d1);
let status= arr.find(ele=>ele.email==email);
if(status){
return res.json({'msg':'user is already registered with this email '})
}
else{
arr.push({name,email,password});

await fs.writeFile('student.json',JSON.stringify(arr,null,2));
res.json({'msg':'Registration done successfully'});
}
})
app.get("/admin/searchByEmail/:email",async (req,res)=>{
    const sid = req.params.email;
   // console.log(sid);
   const d1=await fs.readFile('student.json',{encoding:'utf-8'});
   const arr=JSON.parse(d1);
  const studentdata= arr.find(ele=>ele.email==sid);
  if(!studentdata){
    res.json({msg:"student not found using this email"})
  }
  res.json({msg:studentdata})
    res.json({msg:"Hii, emailbyid"})
})
app.delete("/admin/deleteByEmail/:email",async(req,res)=>{
    const sid = req.params.email;
    let arr=[];
    const d1 = await fs.readFile('student.json',{encodind:'utf-8'});
    arr = JSON.parse(d1);
    const index = arr.findIndex(ele=>ele.email==sid);
    if(index== -1){
        res.json({msg:"student not found using this email to delete"})
    }
    arr.splice(index,1);
    fs.writeFile('student.json',JSON.stringify(arr,null,2));
    res.json({msg:"student not found using this email"})
})
app.patch("/admin/updateByEmail/email",(req,res)=>{
    const sid = req.params.email;
    
})
app.listen(3001,()=>{
    console.log("express is running on"+3001);
});