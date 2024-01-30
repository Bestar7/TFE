import type { JSX } from 'solid-js';

import logo from '../../logo.svg';
import styles from '../../App.module.css';

const Logo = () : JSX.Element => {
  return ( 
    <img src={logo} class={styles.logo} alt="logo" />
  );
};

export default Logo;
