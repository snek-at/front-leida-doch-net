//#region > Imports
//> Redux
import { combineReducers } from "redux";
//> Reducers
import { loadingBarReducer } from "react-redux-loading-bar";

//> Reducers
// Authentication
import authReducer from "./authReducers";
import generalReducer from "./generalReducers";
import userReducer from "./userReducers";

//#endregion

//#region > Config
const rootReducer = combineReducers({
  loadingBar: loadingBarReducer, // Loading bar
  auth: authReducer, // User authentication
  general: generalReducer, // General data
  user: userReducer, // User data
});
//#endregion

//#region > Exports
export default rootReducer;
//#endregion
