import { Link, NavLink, useParams, withRouter } from 'react-router-dom'
import { UserService } from '../services/UserService'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getLoggedInUser } from '../store/actions/user.actions'
 
export function AppHeader(props) {
  // const [user, setUser] = useState(null)
  const user = useSelector((storeState) => storeState.userModule.loggedInUser)
  const params = useParams()
  const dispacth = useDispatch()

  useEffect(() => {
    dispacth(getLoggedInUser())
    return () => {}
  }, [])

  async function loadUser() {
    const user = await UserService.getLoggedinUser()
    // setUser(user)
  }

  const imgUrl = 'images.png'
  if (user)
    return (
      <header className="main-header">
        <NavLink to="/" className="main-header-home-navlink">
          <div className="flex">
            <img className="main-header-img" src={require(`../assets/imgs/${imgUrl}`)} alt="" />
            <h2>Bitcoin</h2>
          </div>
        </NavLink>
        <div className="header-navs">
          <NavLink to="/contact">Contacts</NavLink>
          <NavLink to="/login">Logout</NavLink>
          <NavLink to="/statistics">Charts</NavLink>
        </div>
      </header>
    )
  return (
    <header className="main-header">
      <NavLink to="/" className="main-header-home-navlink">
        <div className="flex">
          <img className="main-header-img" src={require(`../assets/imgs/${imgUrl}`)} alt="" />
          <h2>Bitcoin</h2>
        </div>
      </NavLink>
      <div className="header-navs">
        <NavLink to="/contact">Contacts</NavLink>
        <NavLink to="/signup">SignUp</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/statistics">Charts</NavLink>
      </div>
    </header>
  )
}
