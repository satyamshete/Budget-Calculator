import React from 'react'


function Items(props) {

   
  return (

    <div className='show-expenditure'>
        <p>{props.charge}</p>
        <p>{props.amount}</p>
        <div className='edit-delete-button'>
        <button id='edit-buttton' onClick={() => props.onEdit(props.id)}><i class="fas fa-edit"></i></button>
        <button onClick={() => props.onDelete(props.id)}><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>   

  )
}

export default Items
