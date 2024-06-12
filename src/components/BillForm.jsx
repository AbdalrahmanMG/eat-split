import React, { useState } from 'react'
import Button from './Button'

export default function BillForm({ selectedFriend, handleSplitBill }) {
    const [bill, setBill] = useState('')
    const [paidByUser, setPaidByUser] = useState('')
    const [whoIspaying, setWhoIspaying] = useState('')
    const paidByFriend = bill ? bill - paidByUser : ''

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!bill || !paidByUser) return
        handleSplitBill(whoIspaying === 'user' ? - paidByFriend : paidByFriend)
    }
    return (
        <form onSubmit={handleSubmit} className='form-split-bill'>
            <h2>Split bill with {selectedFriend.name}</h2>

            <label htmlFor="bValue">💰 Bill value</label>
            <input type="number" name='bValue' id='bValue' value={bill} onChange={e => setBill(Number(e.target.value))} />

            <label htmlFor="expense">🕴 YOur expense</label>
            <input type="number" name='expense' id='expense' value={paidByUser} onChange={e => setPaidByUser(Number(e.target.value))} />

            <label htmlFor="xExpense">👬 {selectedFriend.name}'s expense</label>
            <input type="number" disabled name='xExpense' id='xExpense' value={paidByFriend} />

            <label htmlFor="payBill">🤑 who is paying the bill?</label>
            <select name='payBill' id='payBill' value={whoIspaying} onChange={e => setWhoIspaying(e.target.value)}>
                <option value="user">You</option>
                <option value='friend'>{selectedFriend.name}</option>
            </select>
            <Button >Split bill</Button>
        </form>
    )
}
