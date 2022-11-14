import React from 'react'

import {ClipboardText} from 'phosphor-react'

import styles from './NoTasks.module.css'

export const NoTasks = () => {
  return (
    <div className={styles.container}>
      <ClipboardText size={56}/>
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
