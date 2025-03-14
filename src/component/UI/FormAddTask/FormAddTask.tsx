import React,{FC} from 'react'
import cl from  './FormAddTask.module.css'
import { ITask } from '../../../types'

interface FormAddTaskForm{
    // children:React.ReactNode,
    task:ITask
    setTask: React.Dispatch<React.SetStateAction<ITask>>;
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    addTask: (e: React.FormEvent<HTMLFormElement>) => void;
}



const FormAddTask:FC<FormAddTaskForm>= ({task,addTask,setTask,setTasks}) =>{
  return (
    <form className={cl.formActive} onSubmit={addTask}>
      <input  className={cl.blockFlex} onChange={(e)=>setTask({...task,title:e.target.value})} type="text" value={task.title} placeholder='Input the title' />
      <input  className={cl.blockFlex} onChange={(e)=>setTask({...task,description:e.target.value})} type="text" value={task.description} placeholder='Input the description' />
      <button className={cl.blockFlex}>
        Add Task
      </button>
    </form>
  )
}
export default FormAddTask
