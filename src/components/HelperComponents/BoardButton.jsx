import React from 'react';
import * as styles from './BoardButton.scss';

const BoardButton = ({ icon, title, showAction }) => {
  return (
    <div className={styles.board__button} onClick={() => showAction()}>
      {title}
    </div>
  );
};

export default BoardButton;
