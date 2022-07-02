import { combineReducers } from "redux";
import user from "./user_reducer";

// 여러 리듀서를 rootReducer에서 하나로 합쳐주기
const rootReducer = combineReducers({
  user,
});

export default rootReducer;
