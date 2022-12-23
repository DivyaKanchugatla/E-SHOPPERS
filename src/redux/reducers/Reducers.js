import { combineReducers } from "redux";
import cartReducer from "./CartReducer";


const Reducers = combineReducers({
       _cardProduct: cartReducer,
     });
export default Reducers;