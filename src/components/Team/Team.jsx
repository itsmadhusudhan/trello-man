import React from 'react';
import BoardLink from '../BoardLink';
import PropTypes from 'prop-types';

const Team=({boards,name})=>{
  return(
    <div>
    <h1>{name}</h1>
      {
        boards.length!==0 && boards.map(board=>{
          return <BoardLink key={board.title} board={board}/>
        })
      }
    </div>
  )
}

export default Team;