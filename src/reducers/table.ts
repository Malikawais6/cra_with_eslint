const SAVE_DATA = "SAVE_DATA";
const UPDATE_DATA = "UPDATE_DATA";
const DELETE_DATA = "DELETE_DATA";

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SAVE_DATA:
      return action.data;
    case UPDATE_DATA:
      return {};
    case DELETE_DATA:
      return {};
    default:
      return state;
  }
};
