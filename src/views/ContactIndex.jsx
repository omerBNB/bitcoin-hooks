import { logDOM } from '@testing-library/react'
import { Component, useEffect } from 'react'
import { contactService } from '../services/contact.service'
import { ContactsList } from '../cmps/ContactsList'
import { FilterBy } from '../cmps/FilterBy'
import { connect, useDispatch, useSelector } from 'react-redux'
import { loadContacts, removeContact, setFilterBy } from '../store/actions/contact.actions'


export function ContactIndex(props) {
  const contacts = useSelector((stoteState) => stoteState.contactModule.contacts)
  const filterBy = useSelector((stoteState) => stoteState.contactModule.filterBy)
  const dispacth = useDispatch()

  // componentDidMount() {
  //   this.props.loadContacts()
  // }
  useEffect(() => {
    dispacth(loadContacts())
  }, [])
  

  function onChangeFilter(filterBy) {
    dispacth(setFilterBy(filterBy))
    dispacth(loadContacts())
  }
 
  async function onRemoveContact(contactId){
    try {
      dispacth(removeContact(contactId))
    } catch (error) {
      console.log('error:', error)
    }
  }

    // const { contacts, filterBy } = this.props
    if (!contacts) return <div>Loading...</div>
    return (
      <section className='main-contact-container'>
        <FilterBy filterBy={filterBy} onChangeFilter={onChangeFilter} />
        <ContactsList contacts={contacts} onRemoveContact={onRemoveContact} />
      </section>
    )
  
}

// const mapStateToProps = (state) => ({
//   contacts: state.contactModule.contacts,
//   filterBy: state.contactModule.filterBy,
// })

// const mapDispatchToProps = {
//   loadContacts,
//   removeContact,
//   setFilterBy,
// }

// export const ContactIndex = connect(mapStateToProps, mapDispatchToProps)(_ContactIndex)
