import React, { FormEvent, useEffect, useState } from 'react';
import FormAddTask from './component/UI/FormAddTask/FormAddTask';
import Modal from './component/UI/Modal/Modal';
import { ITask } from './types';
import TaskList from './component/UI/TaskList/TaskList';

function App() {
  
  const [task,setTask] = useState<ITask>({title:'',description:''})
  const [tasks,setTasks] = useState<ITask[]>([])
  const [modal,setModal] = useState<boolean>(false)


  function addTask(e:FormEvent):void{
    e.preventDefault()
    setTasks([...tasks,task])
    setTask({title:'',description:''})
  }
  useEffect(()=>{
    console.log(tasks)
  },[tasks])

  return (
    <div>
      <h1>Task Manager</h1>
      <Modal visible={modal} setVisible={setModal} >
        <FormAddTask task={task}   addTask={addTask} setTask={setTask} setTasks  = {setTasks}   />
      </Modal>
      <button onClick={()=> setModal(true)}>
        Open Modal Window
      </button>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
