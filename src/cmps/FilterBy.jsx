import { logDOM } from '@testing-library/react'
import React, { Component, useEffect, useState } from 'react'
import { useFormRegister } from '../customHooks/useFormRegister'

export function FilterBy(props) {
  // const [filterBy, setFilterBy] = useState(null)
  const [register] = useFormRegister({ ...props.filterBy }, props.onChangeFilter)
  // useEffect(() =>{
  //   setFilterBy({...props.filterBy})
  // },[])
  
  // useEffect(() => {
  //   props.onChangeFilter(filterBy)
  // }, [filterBy])

  // function handleChange({ target }) {
  //   const field = target.name
  //   let value = target.value
  //   setFilterBy((prevFilterBy) => ({ ...prevFilterBy, [field]: value }))
  // }
  // if (!filterBy) return <div>Loading...</div>
  // const { name, email, phone } = filterBy
  return (
    <form action="">
      <section className="filter-container">
        <h1 className="filter-h1">Search Contacts By:</h1>
        <label htmlFor="name">Name:</label>
        <input {...register('name', 'text')} />
        <label htmlFor="email">Email:</label>
        <input {...register('email', 'text')} />
        <label htmlFor="phone">Phone:</label>
        <input {...register('phone', 'text')} />
      </section>
    </form>
  )
}
