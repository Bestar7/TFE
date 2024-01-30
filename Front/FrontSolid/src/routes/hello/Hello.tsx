import type { Component } from 'solid-js';

import styles from '../../App.module.css';

const Hello: Component = () => {
  return ( 
    <div class={styles.App}>
      <header class={styles.header}>
        <p>HELLLLLLO</p>
      </header>
    </div> 
  );
};

export default Hello;
