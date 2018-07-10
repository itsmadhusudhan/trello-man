import React from 'react';
import PropTypes from 'prop-types';
import Team from '../../components/Team';
import { connect } from 'react-redux';
import { createBoard } from '../../redux/actions/boardActions';
import * as styles from './TeamContainer.scss';

const TeamContainer = ({ boards, teams }) => {
  return (
    <div className={styles.team__container}>
      {teams.map(team => {
        return <Team key={team.name} name={team.name} boards={boards.filter(board=>board.name===team.name)} />;
      })}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    teams: state.teams,
    boards: state.boards
  };
};

TeamContainer.propTypes={
  boards:PropTypes.array,
  teams:PropTypes.array
}

export default connect(mapStateToProps)(TeamContainer);
