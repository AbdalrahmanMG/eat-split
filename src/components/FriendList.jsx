import React from 'react'
import Friend from './Friend'

export default function FriendList({ allFriends , handleBillOpen, selectedFriend, isBillOpen}) {
  return (
    <div>
      <ul>
        {allFriends.map(f => <Friend handleBillOpen={handleBillOpen} isBillOpen={isBillOpen} selectedFriend={selectedFriend} friend={f} key={f.id}/>)}
      </ul>
    </div>
  )
}
