import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import * as styles from './CreateBoardModal.scss';

const CreateBoardModal=({isBoardModalActive})=>{
  return(
    <Fragment>
    {
      isBoardModalActive && <div className={styles.modal__container}>
      <div className={styles.modal}>
        modal here
      </div>
    </div>
  }
    </Fragment>
  )
}

export default CreateBoardModal;