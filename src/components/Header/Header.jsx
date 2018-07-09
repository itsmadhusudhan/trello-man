import React from 'react';
import { NavLink } from 'react-router-dom';
import BoardSidebar from '../BoardSidebar';
import * as styles from './Header.scss';
import BoardButton from '../HelperComponents/BoardButton.jsx';
import CreateSidebar from '../HelperComponents/CreateSidebar.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarActive: false,
      createSidebarActive: false
    };
  }

  showSidebar = () => {
    this.setState(prevState => ({
      isSidebarActive: !prevState.isSidebarActive
    }));
  };

  showCreateSidebar = () => {
    this.setState(prevState => ({
      createSidebarActive: !prevState.createSidebarActive
    }));
  };

  render() {
    return (
      <header className={styles.header}>
        <BoardButton title="Board" showAction={this.showSidebar} />
        <BoardSidebar active={this.state.isSidebarActive} />
          <h1 className={styles.header__title}><NavLink to="/">Trello Man</NavLink></h1>
        <nav className={styles.header__navigation}>
          <BoardButton title="Create" showAction={this.showCreateSidebar} />
          <CreateSidebar active={this.state.createSidebarActive} />
        </nav>
      {
        console.log(this.state)
      }
      </header>
    );
  }
}

export default Header;
