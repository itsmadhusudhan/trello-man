import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as styles from './ActionLink.scss';

const ActionLink = ({ title, description, openAction }) => {
  return (
    <div className={styles.action__link}  onClick={openAction}>
      {title}
      <span className={styles.description}>{description}</span>
    </div>
  );
};

export default ActionLink;
