import React from 'react'

export default function ProgressBar(props) {
  const { text, remainder } = props
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  return (
    <div className='level'>
      <div>
        <h4>{text}</h4>
      </div>

      {arr.map((element, eleIdx) => {
        return (
          <div className='level-bar' key={eleIdx}>{}</div>
        )
      })}

      <div className='xp' style={{ width: `${remainder}%` }}></div>
    </div>
  )
}
