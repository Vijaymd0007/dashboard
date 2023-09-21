import React from 'react'
import LogoutButton from '../Logout'
import BarChart from './Chart'
import Board from './Board'
import Navbar from './Navbar'
import Profile from '../Profile'
import Cards from './Cards'
import CircleGraph from './CircleGraph'
import AddProfile from './AddProfile'
import './dashboard.css'
const Dashboard = () => {
  return (
    <>
    <div className='AllComponents'>
        <Board/>
<Navbar/>
<Cards/>
    <BarChart/>
   
    <CircleGraph/>
    <AddProfile/>
     
    </div>
    
   



  </> )
}

export default Dashboard