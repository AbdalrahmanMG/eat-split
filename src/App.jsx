import './App.css';
import FriendList from './components/FriendList';
import NewFriend from './components/NewFriend';
import Button from './components/Button';
import BillForm from './components/BillForm';
import { useState } from 'react';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


function App() {
  const [isBillOpen, setBillOpen] = useState(false)
  const [isAddfriendOpen, setAddfriendOpen] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState({})
  const [allFriends, setAllFriends] = useState(initialFriends)

  const handleBillOpen = (friend) => {
    if (friend.id === selectedFriend.id) {
      setBillOpen(!isBillOpen)
    } else {
      setBillOpen(true)
      setSelectedFriend(friend)
    }
    setAddfriendOpen(false)
  }

  const handleFriendOpen = () => {
    setAddfriendOpen(!isAddfriendOpen)
    setBillOpen(false)
  }

  const handelnewFriends = (friend)=>{
    setAllFriends(oldlist => [...oldlist, friend])
  }

  const handleSplitBill =(value) =>{
    setAllFriends(friends => friends.map(friend=> friend.id === selectedFriend.id ? {...friend, balance: friend.balance + value}: friend))
    setBillOpen(false)
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList allFriends={allFriends} isBillOpen={isBillOpen} selectedFriend={selectedFriend} handleBillOpen={handleBillOpen} />
        {isAddfriendOpen ?
          <NewFriend handelnewFriends={handelnewFriends} />
          : ''
        }
        <Button clickAction={handleFriendOpen}>{isAddfriendOpen ? 'close' : 'Add Frind'}</Button>
      </div>
      {isBillOpen ?
        <BillForm selectedFriend={selectedFriend} handleSplitBill={handleSplitBill}/>
        : ''}
    </div>
  );
}

export default App;
