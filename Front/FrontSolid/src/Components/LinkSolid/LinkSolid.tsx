import type { JSX } from 'solid-js';

import styles from '../../App.module.css';

const LinkSolid = () : JSX.Element => {
  return ( 
    <a
      class={styles.link}
      href="https://github.com/solidjs/solid"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn Solid
    </a>
  );
};

export default LinkSolid;
