import React,{FC} from 'react'
import cl from './Modal.module.css'

interface ModalProps{
  children:React.ReactNode,
  visible:boolean,
  setVisible:React.Dispatch<React.SetStateAction<boolean>>
}


const Modal:FC<ModalProps> = ({children,visible,setVisible}) => {


  const rootClasses = [cl.modal]
  if(visible){
    rootClasses.push(cl.modal__active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
      <div className={cl.modal__content} onClick={(e)=>e.stopPropagation()} >
          {children}
      </div>
    </div>
  )
}
export default Modal