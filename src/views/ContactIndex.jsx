import { logDOM } from '@testing-library/react'
import { Component, useCallback, useEffect } from 'react'
import { contactService } from '../services/contact.service'
import { ContactsList } from '../cmps/ContactsList'
import { FilterBy } from '../cmps/FilterBy'
import { connect, useDispatch, useSelector } from 'react-redux'
import { loadContacts, removeContact, setFilterBy } from '../store/actions/contact.actions'
import { Link } from 'react-router-dom'


export function ContactIndex(props) {
  const contacts = useSelector((stoteState) => stoteState.contactModule.contacts)
  const filterBy = useSelector((stoteState) => stoteState.contactModule.filterBy)
  const dispacth = useDispatch()

 
  useEffect(() => {
    dispacth(loadContacts())
  }, [])
  

  function onChangeFilter(filterBy) {
    dispacth(setFilterBy(filterBy))
    dispacth(loadContacts())
  }
 
   const onRemoveContact = useCallback(async (contactId) => {
    try {
      dispacth(removeContact(contactId))
    } 
    catch (error) {
      console.log('error:', error)
    }
  },[])
   
    // const { contacts, filterBy } = this.props
    if (!contacts) return <div>Loading...</div>
    return (
      <section className="main-contact-container">
        <Link to={"/contact/edit"}>
        <button className="add-contact-btn">add Contact</button>
        </Link>
        <FilterBy filterBy={filterBy} onChangeFilter={onChangeFilter} />
        <ContactsList contacts={contacts} onRemoveContact={onRemoveContact} />
      </section>
    )
  
}

