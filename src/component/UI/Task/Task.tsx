import React,{FC} from 'react'
import { ITask } from '../../../types'
import cl from './Task.module.css'


interface TaskProps{
  task:ITask
  number:number

}


const  Task:FC<TaskProps>= ({task,number}) => {
  return (
    <div className={cl.task}>
      <h1>{number} </h1>
      <h1>{task.title} </h1>
      <h1>{task.description} </h1>
    </div>
  )
}
export default Task