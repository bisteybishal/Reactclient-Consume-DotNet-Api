import{combineReducers} from "redux";
import { BlogReducer } from "./BlogReducer";

const rootReducers=combineReducers({
    Blogs:BlogReducer,
});
export default rootReducers;