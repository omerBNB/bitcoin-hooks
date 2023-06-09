import { Component, useEffect, useState } from 'react'
import { contactService } from '../services/contact.service'
import { TransferFund } from '../cmps/TransferFund'
import { UserService } from '../services/UserService'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { MovesList } from '../cmps/MovesList'
import {
  loadContacts,
  removeContact,
  setFilterBy,
  loadContact,
  saveCurrContact,
} from '../store/actions/contact.actions'
import { updateUser } from '../store/actions/user.actions'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getLoggedInUser } from '../store/actions/user.actions'

export function ContactDetails(props) {
  const user = useSelector((storeState) => storeState.userModule.loggedInUser)
  const contact = useSelector((storeState) => storeState.contactModule.contact)
  const moves = useSelector((storeState) => storeState.userModule.loggedInUser?.moves)
  const [funds, setFunds] = useState('1')
  const params = useParams()
  const navigate = useNavigate()
  const dispacth = useDispatch()
  useEffect(() => {
    dispacth(getLoggedInUser())
    return () => {}
  }, [])

  useEffect(() => {
    dispacth(loadContact(params.id))
    return () => {}
  }, [params.id])

  function formatTime(){
     const day = new Date().getDate()
     const month =
       new Date().getMonth() + 1 > 9 ? new Date().getMonth() + 1 : '0' + (new Date().getMonth() + 1)

     const year = new Date().getFullYear()
     const hours = new Date().getHours()
     const minutes =
       new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()
     const seconds =
       new Date().getSeconds() > 9 ? new Date().getSeconds() : '0' + new Date().getSeconds()

       return hours + ':' + minutes + ':' + seconds + ' ' + day + '/' + month + '/' + year
  }

  async function transferFunds(ev) {
    ev.preventDefault()
    const formattedTime = formatTime()
    const move = {
      name: contact.name,
      at: formattedTime,
      amount: +funds,
    }

    user.moves.unshift(move)
    user.coins -= +funds

    contact.coins += +funds
    dispacth(saveCurrContact(contact))
    dispacth(updateUser(user))
  }

  function handleChange(target) {
    let value = +target.target.value
    setFunds(value)
  }

  function onBack() {
   navigate('/contact')
  }

  if (!contact || !moves) return <div>Please Login...</div>
  return (
    <article className="details-container">
      <button className="details-btn" onClick={onBack}>
        Back
      </button>

      <section className="details-card">
        <img src={contact.img} alt="" />
        <h2>{contact.name}</h2>
        <h3>{contact.email}</h3>
        <h4>{contact.phone}</h4>
        <h4>Transfered Funds: {contact.coins}</h4>
        <TransferFund
          contact={contact}
          transferFunds={transferFunds}
          handleChange={handleChange}
          funds={funds}
        />
        <MovesList moves={moves} />
      </section>
    </article>
  )
}

