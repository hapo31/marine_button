import { combineReducers } from "redux";
import playAudioReducer from "./PlayAudioReducer";

const rootReducer = combineReducers(playAudioReducer);
export default rootReducer;
