import React from 'react'
import Button from './Button'

export default function Friend({ friend, handleBillOpen, selectedFriend, isBillOpen}) {
  return (
    <li>
      <img src={friend.image} alt="" />
      <h3>{friend.name}</h3>
      {friend.balance === 0 && <p>You and {friend.name} are even 😊</p>}
      {friend.balance < 0 && <p className='red'>You own {friend.name} {Math.abs(friend.balance)}</p>}
      {friend.balance > 0 && <p className='green'> {friend.name} owns you {friend.balance}</p>}

      <Button clickAction={() => handleBillOpen(friend)}>{selectedFriend.id === friend.id && isBillOpen ? `close` : `Select`}</Button>
    </li>
  )
}
