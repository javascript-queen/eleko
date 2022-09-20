
import React from 'react'
import { Link } from 'react-router-dom'
import './CalculatorStyles.css'

const Calculator = () => {
  return (
    <div className='calculator'>
      <div className='card-container'>
        <div className='card'>
          <h3>- Basic -</h3>
          <span className='bar'></span>
          <p className='dollars'>$100</p>
          <p>- 2 Days -</p>
          <p>- 1 Call -</p>
          <p>- 2 Formats -</p>
          <Link to='#/' className='btn btn-light'>Choose</Link>
        </div>

        <div className='card'>
          <h3>- Premium -</h3>
          <span className='bar'></span>
          <p className='dollars'>$200</p>
          <p>- 1 Day -</p>
          <p>- 3 Calls -</p>
          <p>- 4 Formats -</p>
          <Link to='#/' className='btn btn-light'>Choose</Link>
        </div>

        <div className='card'>
          <h3>- Enterprise -</h3>
          <span className='bar'></span>
          <p className='dollars'>$300</p>
          <p>- Same Day -</p>
          <p>- Unlimited Calls -</p>
          <p>- 4 Formats -</p>
          <Link to='#/' className='btn btn-light'>Choose</Link>
        </div>
      </div>
    </div>
  )
}

export default Calculator
