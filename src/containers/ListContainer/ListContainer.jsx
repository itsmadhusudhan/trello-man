import React from 'react';
import PropTypes from 'prop-types';
import List from '../../components/List';
import * as styles from './ListContainer.scss';
import {connect} from 'react-redux';


const ListContainer=(props)=>{
  return(
    <div className={styles.list__container}>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default connect()(ListContainer);