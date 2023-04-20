import { logDOM } from '@testing-library/react'
import { Component } from 'react'
import { contactService } from '../services/contact.service'
import { ContactsList } from '../cmps/ContactsList'
import { FilterBy } from '../cmps/FilterBy'
import { connect } from 'react-redux'
import { loadContacts, removeContact, setFilterBy } from '../store/actions/contact.actions'


class _ContactIndex extends Component {

  componentDidMount() {
    this.props.loadContacts()
  }

  onChangeFilter = (filterBy) => {
    this.props.setFilterBy(filterBy)
    this.props.loadContacts()
  }
 
  onRemoveContact = async (contactId) => {
    try {
      const res = await this.props.removeContact(contactId)
    } catch (error) {
      console.log('error:', error)
    }
  }

  render() {
    const { contacts, filterBy } = this.props
    if (!contacts) return <div>Loading...</div>
    return (
      <section className='main-contact-container'>
        <FilterBy filterBy={filterBy} onChangeFilter={this.onChangeFilter} />
        <ContactsList contacts={contacts} onRemoveContact={this.onRemoveContact} />
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contactModule.contacts,
  filterBy: state.contactModule.filterBy,
})

const mapDispatchToProps = {
  loadContacts,
  removeContact,
  setFilterBy,
}

export const ContactIndex = connect(mapStateToProps, mapDispatchToProps)(_ContactIndex)
