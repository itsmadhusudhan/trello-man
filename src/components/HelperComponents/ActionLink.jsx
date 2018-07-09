import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as styles from './ActionLink.scss';

const ActionLink = ({ title, description }) => {
  return <Link className={styles.action__link} to={title}>
      {title}
      <span className={styles.description}>{description}</span>
    </Link>;
};

export default ActionLink;
