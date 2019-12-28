import React from 'react';
import classes from './Registration.module.css'
import { TextField, Button } from '@material-ui/core';


class Registration extends React.Component {
  state = { 
    email: '',
    password: '',
    passwrod_confirmation: '',
    first_name: '',
    last_name: '',
  }

  onInputChange = (e) => {
    const { name } = e.currentTarget
    this.setState({ [name]: e.currentTarget.value })
  }

  onBtnClick = () => {  
    fetch('https://postify-api.herokuapp.com/auth', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    fetch('https://postify-api.herokuapp.com/auth/sign_in', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.setState({ 
      email: '',
      password: '',
      passwrod_confirmation: '',
      first_name: '',
      last_name: '',
    })
  }

  render () {
    console.log(this.state)
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField 
            name='email'
            className={classes.input} 
            required 
            id="standard-required" 
            label="Email"
            onChange={this.onInputChange}
          /><br/>
          <TextField
            name='password'
            className={classes.input}
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={this.onInputChange}
          />  
          <TextField
            name='passwrod_confirmation'
            className={classes.input}
            id="standard-password-input"
            label="Password confirmation"
            type="password"
            autoComplete="current-password"
            onChange={this.onInputChange}
          /> 
          <TextField 
            name='first_name'
            className={classes.input}
            id="standard-search" 
            label="First name" 
            type="search"
            onChange={this.onInputChange} 
          />
          <TextField 
            name='last_name'
            className={classes.input}
            id="standard-search" 
            label="Last name" 
            type="search"
            onChange={this.onInputChange} 
          /><br/>
          <Button onClick={this.onBtnClick} variant="contained" color="primary">
            Sign up
          </Button>
        </div>
      </form>
    );
  }
}

export default Registration;



const f = {
  "email": "example@mail.com", 
  "password": "11111111" 
}
//   const r = {
//      "email": "example@mail.com", 
//      "password": "11111111", 
//      "passwrod_confirmation": "11111111", 
//      "first_name": "", 
//      "last_name": ""
//   }
// fetch('https://postify-api.herokuapp.com/auth', {
//     method: 'POST',
//     body: JSON.stringify(r),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })

  // fetch('https://postify-api.herokuapp.com/auth/sign_in', {
  //     method: 'POST',
  //     body: JSON.stringify(f),
  //     headers: {
  //         'Content-Type': 'application/json'
  //     }
  // })