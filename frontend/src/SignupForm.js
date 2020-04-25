import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const SignupForm = () => (
    <div>
  <Form onSubmit={(e) => signUp(e)}>
  <Form.Field>
      <label>username</label>
      <input placeholder='username' />
    </Form.Field>
    <Form.Field>
      <label>email</label>
      <input placeholder='email' />
    </Form.Field>
    <Form.Field>
      <label>password</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>password confirmation</label>
      <input placeholder='password confirmation' />
    </Form.Field>
    
    <Button type='submit'>Submit</Button>
  </Form>
 
  </div>
)




const signUp = (e) => {
  let form = e.target
  e.preventDefault()

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: form[0].value,
      email: form[1].value,
      password: form[2].value,
      password_confirmation: form[3].value,
    })
  })
  .then(res => res.json())
  .then(console.log)
}







export default SignupForm