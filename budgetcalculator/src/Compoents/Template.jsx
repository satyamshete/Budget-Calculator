import React, { useState } from 'react'
import Alert from './Alert'
import Items from './Items'
import './Temlate.css'



function Template() {
    const [button,setButton] = useState("Submit")

    
    const chargePlaceholder = "e.g. rent"
    const amountPlaceholder = "e.g 100"
    const [items, setItems] =useState([])
    const [charges, setCharges] =useState("")
    const [amounts, setAmounts] =useState(amountPlaceholder)
    const [alert,setAlert] = useState(null)





    function handleOnChangeCharge(event) {
        setCharges(event.target.value)
    }
    function handleOnChangeAmount(event) {
        setAmounts(parseInt(event.target.value))
    }

    function handleOnSubmit(){
        if (charges === "e.g. rent" ||charges === "" ) {
            setAlert({
                colorBackground: "brown",
                messege:"Please Enter Charge Field"
            })
            setTimeout(()=>{setAlert(null);},1000)
        } else { 
            if (amounts === "e.g 100") {
                setAlert({
                    colorBackground: "yellow",
                    messege:"Please Enter Amount Field"
                })
                setTimeout(()=>{setAlert(null);},1000)
        }else{
            const item = {
                charge: charges,
                amount: amounts
            }
            setItems(previousValues=>[...previousValues,item])
            setCharges("")
            setAmounts(amountPlaceholder)
            setButton("Submit")
            setAlert({
                colorBackground: "Green",
                messege:"Item added successfully"
            })
            setTimeout(()=>{setAlert(null);},1000)
            
        }
            
        }

        
    }
    function Total(total, num) {
        return total + num.amount;
      }

      function handleOnEdit(id) {
        const item = items.filter((e,index) => id === index)
        const newItems = items.filter((e,index) => id !== index)
        setItems(newItems)
        setAmounts(item[0].amount)
        setCharges(item[0].charge)
        setAlert({
            colorBackground: "brown",
            messege:"Edit The Item"
        })
        setTimeout(()=>{setAlert(null);},1000)
        setButton("Edit")

      }
      function handleOnDelete(id) {
        const item = items.filter((e,index) => id === index)
        const newItems = items.filter((e,index) => id !== index)
        setItems(newItems)
        setAlert({
            colorBackground: "red",
            messege:"Item Deleted Successfully"
        })
        setTimeout(()=>{setAlert(null);},1000)

      }


  return (
    <div className='parent-class'>
        <Alert
            alertInfo = {alert}
        />
        <div className='template-class'>
            <div className='heading-class'>
                <h1>Budget Calculator</h1>
            </div>
            <div className='main-class'>
                <div className='charge-amount-class'>
                    <div className='charge-class'>
                        <label htmlFor='charge'>Charge</label>
                        <input onChange={handleOnChangeCharge} name ='charge' id='charge' type="text" placeholder={chargePlaceholder} value={charges} ></input>
                    </div>
                    <div className='amount-class'>
                        <label htmlFor='amount'>Amount</label>
                        <input onChange={handleOnChangeAmount} id='amount' name ='amount' type="number" placeholder={amountPlaceholder} value={amounts} ></input>
                    </div>
                </div>
                <button onClick={handleOnSubmit} className='submit-button'>{button}</button>
                <div >
                    {items.map((e,index)=>
                    {
                        return(
                            <Items
                                key = {index}
                                id = {index}
                                charge = {e.charge}
                                amount = {e.amount}
                                onEdit = {handleOnEdit}
                                onDelete = {handleOnDelete}
                            />
                        )
                    }
                    )
                    }
                </div>
            </div>
            <h1 className='heading-class'>Total Amount is {items.reduce(Total,0)} </h1>
        </div>
    </div>
  )
}

export default Template
