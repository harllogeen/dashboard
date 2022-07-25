import React from 'react'
import Cards from '../Cards/Cards'
import './MainDash.css'
import Table from '../Table/Table'

const MainDash = () => {
  return (
    <div className='MainDash'>
        <h1>Dashboard</h1>
        <Cards />
        <h2>Recent Orders</h2>
        <Table />
    </div>
  )
}

export default MainDash