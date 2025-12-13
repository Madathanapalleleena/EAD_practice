import React from 'react';
import ReactDOM from 'react-dom';
export default function Modal({children,onClose}){
  return ReactDOM.createPortal(
    <div style={{position:'fixed',
      top:0,
      left:0,
      backgroundColor:'rgba(0,0,0,0.3)',
      width:'100%',
      height:'100%',
      display:'flex',
    }}>
      <div style={{backgroundColor:'white',
                 margin:'auto',
                 padding:20,
                 borderRadius:5,
      }}> {children}
      <button onClick={onClose}>close</button>
      </div>

    </div>,document.getElementById('modal-root')
  )
}