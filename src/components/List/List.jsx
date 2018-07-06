import React from 'react';
import PropTypes from 'prop-types';
import * as listStyles from './List.scss'


const List=(props)=>{
  return(
    <div className={listStyles.list}>
      <header className={listStyles.list__header}>list name</header>
      list
    </div>
  )
}

export default List;