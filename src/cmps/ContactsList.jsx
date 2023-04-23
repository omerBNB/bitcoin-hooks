import { ContactsPreview } from './ContactsPreview'
import React, { memo } from 'react'

function _ContactsList({ contacts, onRemoveContact }) {
  return (
    <article className="contacts-container">
      {contacts.map((contact) => (
        <ContactsPreview key={contact._id} contact={contact} onRemoveContact={onRemoveContact}/>
      ))}
    </article>
  )
}

export const ContactsList = memo(_ContactsList)