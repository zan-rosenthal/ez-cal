import { combineReducers } from "redux";

import appReducer from "modules/app";
import apolloClient from "./apolloClient";

export default combineReducers({
  app: appReducer,
  apollo: apolloClient.reducer()
});
