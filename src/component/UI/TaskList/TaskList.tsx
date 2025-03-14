import React, { FC } from "react";
import { ITask } from "../../../types";
import Task from "../Task/Task";

interface TaskListProps {
  tasks: ITask[];
}

const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} task={task} number={index + 1} />
      ))}
    </div>
  );
};
export default TaskList;
