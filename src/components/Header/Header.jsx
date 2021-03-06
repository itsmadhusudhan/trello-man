import React from "react";
import { NavLink } from "react-router-dom";
import BoardSidebar from "../HelperComponents/BoardSidebar.jsx";
import * as styles from "./Header.scss";
import BoardButton from "../HelperComponents/BoardButton.jsx";
import CreateSidebar from "../HelperComponents/CreateSidebar.jsx";
import ReactDOM from "react-dom";
import CreateBoardModal from "../HelperComponents/CreateBoardModal.jsx";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarActive: false,
      createSidebarActive: false,
      isBoardModalActive: false
    };
    this.boardBtnRef = React.createRef();
    this.createBtnRef = React.createRef();
  }

  // componentDidMount() {
  //   console.log(this.state.isSidebarActive);
  //   this.state.isSidebarActive === true
  //     ? document.body.addEventListener("click", this.hideSidebar)
  //     : "";
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log(prevState);
  //   // console.log(this.createBtnRef.current);
  //   if (
  //     !prevState.isSidebarActive === true ||
  //     !prevState.createSidebarActive === true
  //   ) {
  //     document.body.addEventListener("click", this.hideSidebar);
  //   }

  // }

  hideSidebar = e => {
    console.log(e.target);
    e.target !== ReactDOM.findDOMNode(this.boardBtnRef.current) &&
    e.target !== ReactDOM.findDOMNode(this.createBtnRef.current)
      ? this.setState(prevState => ({
          isSidebarActive: false,
          createSidebarActive: false
        }))
      : "";
  };

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

  openCreateBoardModal = e => {
    e.preventDefault();
    console.log("opening modal!!");
    this.setState(prevState => ({
      isBoardModalActive: !prevState.isBoardModalActive
    }));
  };

  render() {
    return (
      <header className={styles.header}>
        <BoardButton
          title="Board"
          showAction={this.showSidebar}
          ref={this.boardBtnRef}
        />
        <BoardSidebar active={this.state.isSidebarActive} />
        <h1 className={styles.header__title}>
          <NavLink to="/">Trello Man</NavLink>
        </h1>
        <nav className={styles.header__navigation}>
          <BoardButton
            title="Create"
            showAction={this.showCreateSidebar}
            ref={this.createBtnRef}
          />
          <CreateSidebar
            active={this.state.createSidebarActive}
            openCreateBoardModal={this.openCreateBoardModal}
            isBoardModalActive={this.state.isBoardModalActive}
          />
          <CreateBoardModal isBoardModalActive={this.state.isBoardModalActive}/>
        </nav>
        <a href="" onClick={this.openCreateBoardModal}>
          modal
        </a>
      </header>
    );
  }
}

export default Header;
