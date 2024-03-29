import type { Component } from 'solid-js';

import styles from '../../App.module.css';
import ConnectionForm from '../../Components/Form/ConnectionForm'

const connectionPage: Component = () => {
  return ( 
    <div class={styles.App}>
      <header class={styles.header}>
        <h2>Connection</h2>
        <ConnectionForm />
      </header>
    </div> 
  );
};

export default connectionPage;
