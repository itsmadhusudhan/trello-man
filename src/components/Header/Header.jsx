import React from 'react';
import * as styles from './Header.scss';

const Header=()=>{
  return(
    <header className={styles.header}>
      <h1 className={styles.header__title}>Trello Man</h1>
    </header>
  )
}

export default Header;