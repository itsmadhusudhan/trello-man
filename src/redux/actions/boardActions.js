export const createBoard=({name="Personal Boards",title})=>(
  {
    type:"CREATE_BOARD",
    board:{
      name,
      title
    }
  }
)

export const deleteBoard=({title})=>(
  {
    type:"DELETE_BOARD",
    title
  }
)