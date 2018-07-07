import React from 'react';
import BoardSidebar from '../BoardSidebar';
import * as styles from './Header.scss';
import BoardButton from '../HelperComponents/BoardButton.jsx';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isSidebarActive:false
    }
  }

  showSidebar=()=>{
    this.setState((prevState)=>({
      isSidebarActive:!prevState.isSidebarActive
    }))
  }


  render() {
    return (
      <header className={styles.header} >
        <BoardButton title="Board" showAction={this.showSidebar}/>
        <BoardSidebar active={this.state.isSidebarActive}/>
        <h1 className={styles.header__title}>Trello Man</h1>
      </header>
    );
  }
}

export default Header;
