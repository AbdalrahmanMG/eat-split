import React, { useState } from 'react'
import Button from './Button'

export default function BillForm({ selectedFriend, handleSplitBill }) {

    const [billData, setBillData] = useState({
        bill: '',
        paidByUser: '',
        whoIspaying: '',
    })

    const paidByFriend = billData.bill ? billData.bill - billData.paidByUser : ''

    const onChangeInput = (e)=>{
        let {value, name}= e.target
        setBillData({...billData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!billData.bill || !billData.paidByUser) return
        handleSplitBill(billData.whoIspaying === 'user' ? - paidByFriend : paidByFriend)
    }

    return (
        <form onSubmit={handleSubmit} className='form-split-bill'>
            <h2>Split bill with {selectedFriend.name}</h2>

            <label htmlFor="bValue">💰 Bill value</label>
            <input type="number" name='bill' id='bValue' value={billData.bill} onChange={onChangeInput} />

            <label htmlFor="expense">🕴 YOur expense</label>
            <input type="number" name='paidByUser' id='expense' value={billData.paidByUser} onChange={onChangeInput} />

            <label htmlFor="xExpense">👬 {selectedFriend.name}'s expense</label>
            <input type="number" disabled name='xExpense' id='xExpense' value={paidByFriend} />

            <label htmlFor="payBill">🤑 who is paying the bill?</label>
            <select name='whoIspaying' id='payBill' value={billData.whoIspaying} onChange={onChangeInput}>
                <option value="user">You</option>
                <option value='friend'>{selectedFriend.name}</option>
            </select>
            <Button >Split bill</Button>
        </form>
    )
}
