import { Trash, Circle, Check } from 'phosphor-react';

import styles from './Task.module.css';

import checkIcon from '../assets/check.svg';
import checkedIcon from '../assets/checked.svg';
import { ITask } from '../mock/tasks';

interface ITaskProp {
  task: ITask;
  handleDeleteTask: (id: string) => void;
  handleCompleteTask: (id: string) => void;
}

export const Task = ({ task, handleDeleteTask, handleCompleteTask }: ITaskProp) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <button onClick={() => {handleCompleteTask(task.id)}}>
          {task.completed ? (
            <img src={checkedIcon} alt="Marcada como concluída" />
          ) : (
            <img src={checkIcon} alt="Marcar como concluída" />
          )}
        </button>

        <p className={task.completed ? `${styles.completed}` : ''}>
          {task.content}
        </p>
      </div>
      <button onClick={() => handleDeleteTask(task.id)}>
        <Trash size={24} />
      </button>
    </div>
  );
};
