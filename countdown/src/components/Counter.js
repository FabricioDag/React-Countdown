import React from 'react'

const Counter = ({title,number}) => {
  return (
    <div className='counter'>
        <div className='top-counter'>
            <div className='left'></div>
            <div className='right'></div>
        </div>
        <p className='counter-number'>{number}</p>
        <p className='counter-text'>{title}</p>
    </div>
  )
}

export default Counter