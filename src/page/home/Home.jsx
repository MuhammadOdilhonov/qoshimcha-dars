import React from 'react'
import CardsPage from '../../components/Cards/Cards'
import './style.css'
import { Card } from 'react-bootstrap'

export default function Home() {
  return (
    <div className='Home'>
        <div className='banner'>
              <h1>Aksesuar <br />
                  Iphone 13 pro max</h1>
                  <img src="./iPhone-13-Pro.png" alt="iphone" />
        </div>
          <CardsPage />
    </div>
  )
}
