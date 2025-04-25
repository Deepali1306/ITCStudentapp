const express = require('express');
const fs = require('fs').promises;
const app = express();
app.use(express.json());// middleware to convert incoming data into json
app.get("/", (req, res) => {
    res.json({ msg: "hii" })
})
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    console.log(name + email + password);
    // res.json({ msg: "reached" });
    let arr = [];
    const d1 = await fs.readFile('student.json', { encoding: 'utf-8' });
    arr = JSON.parse(d1);
    let status = arr.find(ele => ele.email == email);
    if (status) {
        return res.json({ msg: 'user is already registered with this email ' })
    }
    else {
        arr.push({ name, email, password });
        await fs.writeFile('student.json', JSON.stringify(arr, null, 2));
        res.json({ msg: 'Registration done successfully' });
    }
})
app.post("/login",async (req, res) => {
    const { email, password } = req.body;
    let arr=[];
   
        const d1=await fs.readFile('student.json',{encoding:'utf-8'});
        arr=JSON.parse(d1);
       let status= arr.find(ele=>ele.email==email && ele.password==password) ; 
       if(status){
       
   return res.json({msg:'success '})
  } 
  else{
   
    res.json({msg:'Invalid User!pls login with correct credentials'});
  }
})
app.post('/admin/show',async(req,res)=>{
    try{
        const d1=await fs.readFile('student.json',{encoding:'utf-8'});
        arr=JSON.parse(d1);
        res.json({msg:arr}) ;
    }
    catch(err){
       res.status(500).json({msg:err.message});
    }
})
app.get("/admin/searchByEmail/:email",async(req,res)=>{
   const sid= req.params.email;
   const d1=await fs.readFile('student.json',{encoding:'utf-8'});
   arr=JSON.parse(d1);
   const studentdata=arr.find(ele=>ele.email==sid);
   if(!studentdata)
   {
    res.json({msg:"not found"});
   }
  res.json({msg:studentdata});
//    console.log(sid);
   res.json({msg:"hii"});
})
app.delete("/admin/deleteByEmail/:email",async(req,res)=>{
    const sid= req.params.email;
    const d1=await fs.readFile('student.json',{encoding:'utf-8'});
    arr=JSON.parse(d1);
  const index=  arr.findIndex(ele=>ele.email==sid);
  if(index==-1)
  {
    res.json({msg:"not found"});
  }
  arr.splice(index,1);
  await fs.writeFile('student.json', JSON.stringify(arr, null, 2));
  res.json({msg:"student is deleted"});
})
app.patch("/admin/updateByEmail/:email",async(req,res)=>{
    const sid=req.params.email;
    const{name,password}=req.body;
})

app.listen(3002, () => {
    console.log("express is running on" + 3002);
    
})
