import React, { useState } from 'react'
import Button from './Button';

export default function NewFriend({handelnewFriends}) {
    const [friendName, setFriendName ]= useState()
    const [friendImg, setFriendImg ]= useState()

    const handleSubmit =(e)=>{
        e.preventDefault()
    }

    const handleAddFriend= ()=>{
        if(!friendImg || !friendName) return
        const newFriend = {
            name: friendName,
            image: friendImg,
            balance: 0, 
            id: Date.now()
        }
        handelnewFriends(newFriend)
    }
    
  return (
        <form className='form-add-friend' onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="fname">👫 Friend name</label>
            <input type="text" name='fname' id='fname' value={friendName} onChange={(e)=>setFriendName(e.target.value)} />
            <label htmlFor="fname">😅 Image URL</label>
            <input type="text" name='fname' id='fname' value={friendImg} onChange={(e)=>setFriendImg(e.target.value)} />
            <Button clickAction={handleAddFriend}>Add</Button>
        </form>
  )
}
