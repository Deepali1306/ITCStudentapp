import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Registration() {
  async function sendData(e){
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.password.value;
    alert(name+email+password);
    const response = await fetch("http://localhost:3001/register",{
      method:'POST',
      body:JSON.stringify({name,email,password}),
      headers:{'Content-Type':'application/json'}
    })
    const res = await response.json();
    alert(res.msg);
  }
  return (
    <div>Registration
      
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
<div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
    </div>
  )
}

export default Registration