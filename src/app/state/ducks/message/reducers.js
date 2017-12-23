import * as m from "./types";
import { createReducer } from "../../utils";

const messageReducer = createReducer('')({
    [m.SHOW]: (state, action) => {
        return action.payload
    }
})


export default messageReducer;