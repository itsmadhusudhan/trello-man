import React from 'react';
import BoardLink from '../BoardLink';
import PropTypes from 'prop-types';
import * as styles from './Team.scss';

const Team=({boards,name})=>{
  return(
    <div>
    <h1>{name}</h1>
      <div className={styles.team}>
      {
        boards.length!==0 && boards.map(board=>{
          return <BoardLink key={board.title} board={board}/>
        })
      }
      </div>
    </div>
  )
}

export default Team;