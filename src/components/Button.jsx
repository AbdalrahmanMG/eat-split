import React from 'react'

export default function Button({children, clickAction}) {
  return (
    <button onClick={clickAction} className='button'>{children}</button>
  )
}
