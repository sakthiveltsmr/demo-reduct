import { createStore} from "redux"
import counterReducer from "./index"

const store=createStore(counterReducer);


export default store;