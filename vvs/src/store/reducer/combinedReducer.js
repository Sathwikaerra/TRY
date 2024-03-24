import { combineReducers } from "redux";
import Ticketreducer from "./reducer";
import DateReducer from "./DateReducer";

const reducer=combineReducers({
    Ticketreducer:Ticketreducer,
    DateReducer:DateReducer
})


export default reducer;