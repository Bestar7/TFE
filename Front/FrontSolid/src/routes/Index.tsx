import type { Component } from 'solid-js';

import styles from '../App.module.css';

import Logo from '../Components/Logo/Logo';
import TextSolid from '../Components/TextSolid/TextSolid';
import LinkSolid from '../Components/LinkSolid/LinkSolid';

const Index: Component = () => {
  return ( 
    <div class={styles.App}>
      <header class={styles.header}>
        <Logo />
        <TextSolid />
        <LinkSolid />
      </header>
    </div> 
  );
};

export default Index;
