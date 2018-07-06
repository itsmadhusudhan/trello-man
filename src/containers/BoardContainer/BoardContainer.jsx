import React from "react";
import BoardList from "../../components/BoardList";
import * as styles from "./BoardContainer.scss";

const BoardContainer = () => {
  return (
    <div className={styles.board__container}>
      <BoardList />
    </div>
  );
};

export default BoardContainer;
