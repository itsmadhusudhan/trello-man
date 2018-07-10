import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ActionLink from './ActionLink.jsx';
import * as styles from './Sidebar.scss';

const CreateSidebar = ({ active,openCreateBoardModal }) => {
  return (
    <Fragment>
      {active && (
        <div className={styles.create__sidebar}>
          <ActionLink
            title="Create Board"
            description="A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything."
            onClick={openCreateBoardModal}
            />
          <ActionLink
            title="Create Team"
            description="A team is a group of boards and people. Use it to organize your company, side hustle, family, or friends."
          />
          <ActionLink
            title="Create Business Team"
            description="With Business Class your team has more security, administrative controls, and unlimited Power-Ups."
          />
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

export default connect(mapStateToProps)(CreateSidebar);
