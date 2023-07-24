import React from 'react'
import ReactDOM from 'react-dom';
import classes from './MyModal.module.css'

export default function MyModal({children, flag, setModal}) {
    const modalClasses = [classes.modalWindow]


    if(flag){
        modalClasses.push(classes.modalActive)
    }


    return ReactDOM.createPortal(
        <div className={modalClasses.join(' ')} onClick={()=>setModal(!flag)}>
            <div className={classes.modalBody}>
                <div className={classes.modalContent} onClick={(e)=>e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    )
}
