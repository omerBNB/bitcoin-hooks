import { contactService } from '../services/contact.service'
import { logDOM } from '@testing-library/react'
import {
  loadContacts,
  removeContact,
  setFilterBy,
  loadContact,
  saveCurrContact,
  getEmptyContact,
} from '../store/actions/contact.actions'
import { connect, useDispatch, useSelector, useStore } from 'react-redux'
import { Component, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function ContactEdit(props) {
  const [contact, setContact] = useState(contactService.getEmptyContact())

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadContact()
  }, [])
  
  async function loadContact() {
    const contactId = params.id
    if (contactId) {
      try {
        const contact = await contactService.getContactById(contactId)
        setContact(contact)
      } catch (error) {
        console.log('error:', error)
      }
    }
  }
  async function onSavecontact(ev) {
    ev.preventDefault()
    await contactService.saveContact(contact)
    navigate('/')
  }

  function handleChange({ target }) {
    const field = target.name
    let value = target.value
    setContact((prevContact) => ({ ...prevContact, [field]: value }))
  }

  if (!contact) return <div>Loading...</div>
  const { name, email, phone } = contact
  return (
    <section>
      <h1 className="edit-h1">{contact._id ? 'Edit' : 'Add'} contact:</h1>
      <section className="contact-edit">
        <img src={contact.img} alt="" />
        <form onSubmit={onSavecontact} className="edit-form">
          <div className="flex contact-field">
            <label htmlFor="name">Name: </label>
            <input value={name} onChange={handleChange} type="text" name="name" id="name" />
          </div>
          <div className="flex contact-field">
            <label htmlFor="email">Email: </label>
            <input value={email} onChange={handleChange} type="text" name="email" id="email" />
          </div>
          <div className="flex contact-field">
            <label htmlFor="phone">phone: </label>
            <input value={phone} onChange={handleChange} type="text" name="phone" id="phone" />
          </div>
          <button className="edit-save-btn">Save</button>
        </form>
      </section>
    </section>
  )
}
