import React from 'react'

function Alert(props) {
  return (
    <div className='alert-class'>
     {props.alertInfo && <p style={{backgroundColor: props.alertInfo.colorBackground}}>{props.alertInfo.messege}</p>}
    </div>
  )
}

export default Alert
