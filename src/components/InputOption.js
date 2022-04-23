import React from 'react'
import './InputOption.css';

function InputOption({Icon, title, color}) {
  return (
      <div className='inputOption'>
        {Icon && <div className='inputOption_icon'>
            <Icon style={{color: color}}/>   
        </div>}
        <h4>{title}</h4>
      </div>
      
    
  )
}

export default InputOption