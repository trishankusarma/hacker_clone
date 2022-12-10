import {combineReducers} from "redux";
import newsReducer from "./news.reducer";

const combineReducer=combineReducers({
    news:newsReducer,
})

export default combineReducer;