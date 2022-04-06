import React from 'react';
import ReactDOM  from 'react-dom';

const modalstyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1055,
  width: '100%',
  height: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
  outline: 0
}
const backdropStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1050,
  width: '100vw',
  height: '100vh',
  backgroundColor: '#000',
  opacity: .5
}
const BackDrop = (props) => {
  return <div className='backdrop' style={backdropStyle} onClick={props.onClose} />
}
const ModalContent = (props) => {
  return <div className="" style={modalstyle}>
    <div className="modal-dialog">
      <div className="modal-content">        
        <div className="modal-header">
          <h5 className="modal-title">{props.title}</h5>
          <button type="button" className="btn-close" onClick={props.onClose}></button>
        </div>
        <div className="modal-body">
          {props.children}
        </div>
      </div>
    </div>
  </div>
}

const portalElement = document.getElementById('modal-overlay');
const CartModal = (props) => {
  return (
    <>
       {ReactDOM.createPortal(<BackDrop onClose={props.closeModal} />, portalElement)} 
       {ReactDOM.createPortal(<ModalContent title={props.title} onClose={props.closeModal}>{props.children}</ModalContent>, portalElement)} 
    </>
  )
}

export default CartModal