import React, { FormEvent, useState } from 'react';

import { v4 as uuid4 } from 'uuid';

import { PlusCircle } from 'phosphor-react';

import styles from './NewTask.module.css';
import { ITask } from '../mock/tasks';

interface Props {
  handleAddTask: (task: ITask) => void;
}

export const NewTask = ({ handleAddTask }: Props) => {
  const [inputedContend, setInputedContend] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newTask = {
      id: uuid4(),
      content: inputedContend,
      completed: false,
    };

    handleAddTask(newTask);
    setInputedContend('');
  };
  return (
    <form onSubmit={handleSubmit} className={styles.newTaskForm}>
      <textarea
        name="newTask"
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setInputedContend(e.target.value)}
        value={inputedContend}
      />
      <button type="submit">
        Criar <PlusCircle />
      </button>
    </form>
  );
};
