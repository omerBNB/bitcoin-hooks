import { logDOM } from '@testing-library/react'
import React, { Component, useEffect, useState } from 'react'

export function FilterBy(props) {
  const [filterBy, setFilterBy] = useState(null)

  useEffect(() =>{
    setFilterBy({...props.filterBy})
  },[])
  
  useEffect(() => {
    props.onChangeFilter(filterBy)
  }, [filterBy])

  function handleChange({ target }) {
    const field = target.name
    let value = target.value
    setFilterBy((prevFilterBy) => ({ ...prevFilterBy, [field]: value }))
  }
  if (!filterBy) return <div>Loading...</div>
  const { name, email, phone } = filterBy
  return (
    <form action="">
      <section className="filter-container">
        <h1 className="filter-h1">Search Contacts By:</h1>
        <label htmlFor="">Name:</label>
        <input type="text" onChange={handleChange} value={name} name="name" id="name" />
        <label htmlFor="">Email:</label>
        <input type="text" onChange={handleChange} value={email} name="email" id="email" />
        <label htmlFor="">Phone:</label>
        <input type="text" onChange={handleChange} value={phone} name="phone" id="phone" />
      </section>
    </form>
  )
}
