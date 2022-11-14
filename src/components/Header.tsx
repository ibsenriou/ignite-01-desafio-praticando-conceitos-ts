import React from 'react';

import styles from './Header.module.css';

import todoLogo from '../assets/logo-todo.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src={todoLogo}
        alt="Um icone de um foguete decolando na esquerda com um texto escrito 'todo' logo a direita."
      />
    </header>
  );
};
