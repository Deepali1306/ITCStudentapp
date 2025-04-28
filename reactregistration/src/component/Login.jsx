import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Login() {
  async function senddata(e){
    e.preventDefault();
    
    const email=e.target.email.value;
    const password=e.target.password.value;
    // alert(name+email+password);
   const response= await  fetch("https://itcstudentapp-backend-3s82.onrender.com",{
      method:'POST',
      body:JSON.stringify({email,password}),
      headers:{'content-Type':'application/json'}
      })
    const res=await response.json();
    alert(res.msg);

  }

  
  return (
    <div>
        <div>
        <form onSubmit={senddata}>
  <div class="form-group">
 
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">LOGIN</button>
</form>  
        </div>
    </div>
  )
}

export default Login
