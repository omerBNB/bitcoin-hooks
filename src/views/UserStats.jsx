import { Component, useEffect, useState } from 'react'
import { UserService } from '../services/UserService'
import { BitcoinSerivce } from '../services/BitcoinService'
import { StatisticPage } from './StatisticPage'

export function UserStats() {
  const [currUser, setUser] = useState(null)

  useEffect(() => {
    loadUser()  
    return () => {      
    }
  }, [])
  

  async function loadUser() {
    const currUser = await UserService.getUser()
    currUser['btc'] = await BitcoinSerivce.getRate(currUser.coins)
    setUser(currUser)
  }

    if (!currUser) return <div>Please Login...</div>
    return (
      <section className="userstats-page-container">
        <section className="user-stats-container">
          <h1>{currUser.name}</h1>
          <h2>{currUser.coins} BTC</h2>
          <h3>{currUser.btc} BTC</h3>
        </section>
        <StatisticPage/>
      </section>
    )
  }

