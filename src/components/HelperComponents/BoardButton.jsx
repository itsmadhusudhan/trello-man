import React from "react";
import * as styles from "./BoardButton.scss";

class BoardButton extends React.Component {
  render() {
     const { icon, title, showAction }=this.props;
    return (
      <div className={styles.board__button} onClick={(e) => showAction(e)}>
        {title}
      </div>
    );
  }
}

export default BoardButton;
