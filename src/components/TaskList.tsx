import { ITask } from '../mock/tasks';
import { NoTasks } from './NoTasks';
import { Task } from './Task';

import styles from './TaskList.module.css';

import { tasks } from '../mock/tasks';

import { useEffect, useState } from 'react';
import { NewTask } from './NewTask';

export const TaskList = () => {
  const [taskList, setTaskList] = useState<ITask[]>(tasks);
  const [total, setTotal] = useState(0);
  const [completed, setCompleted] = useState(0);


  const handleDeleteTask = (id: string) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleAddTask = (task: ITask) => {
    setTaskList([...taskList, task]);
  };

  const handleCompleteTask = (id: string) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTaskList(newTaskList);
  };

  useEffect(() => {
    setTotal(taskList.length);
    setCompleted(taskList.filter((task) => task.completed).length);
  }, [taskList]);

  return (
    <>
      <NewTask handleAddTask={handleAddTask} />
      <div className={styles.taskListContainer}>
        <header className={styles.taskListHeader}>
          <div className={styles.tasksCreated}>
            <span>Tarefas criadas</span>
            <strong>{total}</strong>
          </div>
          <div className={styles.tasksFinished}>
            <span>Concluídas</span>
            <strong>{completed} de {total}</strong>
          </div>
        </header>

        <div className={styles.tasks}>
          {taskList.length === 0 ? (
            <NoTasks />
          ) : (
            taskList.map((task) => (
              <Task
                key={task.id}
                task={task}
                handleDeleteTask={handleDeleteTask}
                handleCompleteTask={handleCompleteTask}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};
