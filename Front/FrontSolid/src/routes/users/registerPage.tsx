import type { Component } from 'solid-js';

import styles from '../../App.module.css';
import RegisterForm from '../../Components/Form/RegisterForm'

const registerPage: Component = () => {
  return ( 
    <div class={styles.App}>
      <header class={styles.header}>
        <h2>Register</h2>
        <RegisterForm />
      </header>
    </div> 
  );
};

export default registerPage;
