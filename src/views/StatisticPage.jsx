import { Component, useEffect, useState } from 'react'
import { Charts } from '../cmps/Chrats'

import { BitcoinSerivce } from '../services/BitcoinService'

export function StatisticPage() {
  const [dataForMarketPrice,setData] = useState(null)
  
  useEffect(() => {
    loadData()
    return () => {      
    }
  }, [])
  

  async function loadData(){
    const dataForMarketPrice = BitcoinSerivce.getMarketPrice()
    setData(dataForMarketPrice)
  }

    if (!dataForMarketPrice) return <div>Loading...</div>
    return <Charts data={dataForMarketPrice} />
  }

