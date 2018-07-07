import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BoardLink from '../BoardLink';
import * as styles from './BoardSidebar.scss';

const BoardSidebar = ({ boards, active }) => {
  return (
    <Fragment>
      {active && (
        <div className={styles.board__sidebar}>
          {boards.length !== 0 &&
            boards.map(board => {
              return <BoardLink key={board.title} board={board} />;
            })}
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state, props) => {
  return {
    teams: state.teams,
    boards: state.boards
  };
};

export default connect(mapStateToProps)(BoardSidebar);
