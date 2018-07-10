import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import * as styles from './BoardLink.scss';

const BoardLink=({board})=>{
  return(
    <Link className={styles.board__link} to={board.title}>
      {board.title}
    </Link>
  )
}

BoardLink.propTypes={
  board:PropTypes.object
}

export default BoardLink;