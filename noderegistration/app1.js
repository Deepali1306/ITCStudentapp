const http=require('http');
const fs=require('fs').promises;
const PORT=3001;

const server=http.createServer((req,res)=>{

   if(req.url=='/register' && req.method=='POST'){ 
    let body='';
    let arr=[];
        req.on('data',chunk=>{
            body+=chunk;
        })

        req.on('end',async()=>{

            //console.log(body);
            const {name,email,password}=JSON.parse(body);
            console.log("Hiii..."+name);
                   const d1=await fs.readFile('student.json',{encoding:'utf-8'});
                  arr=JSON.parse(d1);
           let status= arr.find(ele=>ele.email==email);
           if(status){
                 res.setHeader('Content-Type','application/json')
            return res.end(JSON.stringify({'msg':'user is already registered with this email '}))
           }
           else{
            arr.push({name,email,password});
           
           await fs.writeFile('student.json',JSON.stringify(arr));
           res.setHeader('Content-Type','application/json');
           res.end(JSON.stringify({'msg':'Registration done successfully'}));
           }
            
            
        })
        
    

   }
   if(req.url=='/login' && req.method=='POST'){
    let body='';
    let arr=[];
        req.on('data',chunk=>{
            body+=chunk;
        })
        req.on('end',async()=>{
            const {name,email,password}=JSON.parse(body);
            console.log("Hiii..."+email+password);
            const d1=await fs.readFile('student.json',{encoding:'utf-8'});
            arr=JSON.parse(d1);
           let status= arr.find(ele=>ele.email==email && ele.password==password) ; 
           if(status){
            res.setHeader('Content-Type','application/json')
       return res.end(JSON.stringify({'msg':'success '}))
      } 
      else{
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({'msg':'Invalid User!pls login with correct credentials'}));
      }
    })
    

   }
})

server.listen(PORT,()=>{
    console.log("Server is running on::"+PORT);
})