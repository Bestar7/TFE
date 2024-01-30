import type { Component } from 'solid-js';

import styles from '../../App.module.css';
import ConnectionForm from '../../Components/ConnectionForm/ConnectionForm'

const connectionPage: Component = () => {
  return ( 
    <div class={styles.App}>
      <header class={styles.header}>
        <p>Connection</p>
        <ConnectionForm />
      </header>
    </div> 
  );
};

export default connectionPage;
