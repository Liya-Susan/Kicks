import React from 'react'

function Button(props) {
  return (
    <div>
      <button style={{backgroundColor:props.bgcolor,color:props.color,width:props.width,height:props.height,padding:'10px',border:'none',margin:'5px 0px',borderRadius:'8px'}}>{props.text}</button>
    </div>
  )
}

export default Button
