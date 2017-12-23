import * as m from "./types";
import { createReducer } from "../../util";

const messageReducer = createReducer('')({
    [m.SHOW]: (state, action) => {
        return action.payload
    }
})


export default messageReducer;