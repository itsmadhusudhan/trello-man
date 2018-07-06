export const boards = [];

const boardReducer = (state = boards, action) => {
  switch (action.type) {
    case "CREATE_BOARD":
      return [...state,action.board];
    case "DELETE_BOARD":
      return [...state.filter(board=>board.title!==action.title)]
    default:
      return state;
  }
};

export default boardReducer;
