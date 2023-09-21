import React from 'react'
import "./cards.css"
import cardImg1 from '../../images/Vector.svg'
import cardImg2 from '../../images/Vector2.svg'
import cardImg3 from '../../images/Vector3.svg'
import cardImg4 from '../../images/vector4.svg'

const Cards = () => {
  return (
    <>
    <div className='Maincards'>

        <div className='card'>
            <img src={cardImg1} />
            <p>Total Revenues</p>
            <h2>$2,129,430</h2>
            <p>+2.5%</p>
        </div>

        <div className='card'>
            <img src={cardImg2} />
            <p>Total Transactions</p>
            <h2>1,520</h2>
            <p>+1.7%</p>
        </div>
        
        <div className='card'>
            <img src={cardImg3} />
            <p>Total Likes</p>
            <h2>9,721</h2>
            <p>+1.4%</p>
        </div>

        <div className='card'>
            <img src={cardImg4} />
            <p>Total Users</p>
            <h2>9,721</h2>
            <p>+4.2%</p>
        </div>

    </div>
    
    </>
  )
}

export default Cards