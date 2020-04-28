import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const LoginForm = () => (
    <div>
  <Form onSubmit={(e) => login(e)}>
    <Form.Field>
      <label>Username</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>password</label>
      <input placeholder='Last Name' />
    </Form.Field>
    
    <Button type='submit'>Submit</Button>
  </Form>
  <Button onClick={(e) => hello(e)} >go to hello</Button>
  </div>
)



const login = (e) => {
    let form = e.target
    e.preventDefault()

    fetch("http://localhost:3000/login",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: form[0].value,
        password: form[1].value
      })
    })
    .then(res => res.json())
    .then(userInfo => {
        console.log(userInfo)
       localStorage.token = userInfo.token
      // localStorage.setItem("token", userInfo.token)
    })
  }

  const hello = (e) => {
    fetch("http://localhost:3000/hello",{
        method: 'GET',
        headers:{"Authorization": `Bearer ${localStorage.token}`}
    })
    .then(res => res.json())
    .then(userInfo => {
        console.log(userInfo)
    })
  }





export default LoginForm
