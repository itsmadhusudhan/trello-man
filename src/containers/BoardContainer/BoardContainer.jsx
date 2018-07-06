import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ListContainer from '../ListContainer';
import * as boardStyles from './BoardContainer.scss';


const BoardContainer=(props)=>{
  return(
    <div className={boardStyles.board__container}>
      <ListContainer/>
   </div>
  )
}

const mapStateToProps=(state,props)=>{
  return{

  }
}

export default connect(mapStateToProps)(BoardContainer);