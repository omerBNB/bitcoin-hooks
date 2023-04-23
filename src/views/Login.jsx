import { Component, useEffect, useState } from 'react'
import { UserService } from '../services/UserService'
import { Link, NavLink, useNavigate, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getLoggedInUser, login, logOut } from '../store/actions/user.actions'

export function Login(props) {
  // const [user, setUser] = useState(null)
  const user = useSelector((storeState) => storeState.userModule.loggedInUser)
  const [userName, setUserName] = useState('')
  const Navigate = useNavigate()
  const dispacth = useDispatch()

  useEffect(() => {
    dispacth(getLoggedInUser())
    return () => {}
  }, [])

  function loginUser(ev) {
    ev.preventDefault()
    dispacth(login(userName))
    Navigate('/contact')
  }

  function logoutUser(ev) {
    ev.preventDefault()
    dispacth(logOut())
    Navigate('/contact')
  }

  function handleChange({ target }) {
    let value = target.value
    setUserName(value)
    // this.setState(() => ({ username: value }))
  }
  const imgUrl = 'images.png'
  if (user)
    return (
      <section className="signup-container">
        <form action="" className="signup-form" onSubmit={logoutUser}>
          <div className="flex">
            <img src={require(`../assets/imgs/${imgUrl}`)} alt="" />
            <h1>Bitcoin</h1>
          </div>
          <h3>Logout From Bitcoin</h3>
          <button>Logout</button>
        </form>
      </section>
    )
  return (
    <section className="signup-container">
      <form action="" className="signup-form" onSubmit={loginUser}>
        <div className="flex">
          <img src={require(`../assets/imgs/${imgUrl}`)} alt="" />
          <h1>Bitcoin</h1>
        </div>
        <h3>Login to Bitcoin</h3>
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
        <button>Login</button>
      </form>
    </section>
  )
}
