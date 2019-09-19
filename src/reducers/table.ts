import { UPDATE_DATA, SAVE_DATA, DELETE_DATA } from "../constants";
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
