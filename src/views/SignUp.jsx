import { Component, useState } from 'react'
import { UserService } from '../services/UserService'
import { Link, NavLink, useNavigate, withRouter } from 'react-router-dom'

export function SignUp(props) {
  const [user, setUser] = useState(null)
  const [userName, setUserName] = useState('')
  const Navigate = useNavigate()


  function signUp(ev){
    ev.preventDefault()
    const user = UserService.signUp(this.state.username)
    Navigate('/contact')
  }

  function handleChange({ target }){
    let value = target.value
    setUser(value)
  }

    const imgUrl = 'images.png'
    return (
      <section className="signup-container">
        <form action="" className="signup-form" onSubmit={signUp}>
          <div className="flex">
            <img src={require(`../assets/imgs/${imgUrl}`)} alt="" />
            <h1>Bitcoin</h1>
          </div>
          <h3>Sign Up to Bitcoin</h3>
          <p>Not your device? Use a private or incognito window to sign in.</p>
          {/* <h3>Please enter your name</h3> */}
          <div className="signup-name-input">
            <label htmlFor="">Please enter your Name:</label>
            <input
              value={userName}
              onChange={handleChange}
              type="text"
              name="username"
              id="username"
            />
          </div>
          <button>Sign up</button>
        </form>
      </section>
    )
  }

