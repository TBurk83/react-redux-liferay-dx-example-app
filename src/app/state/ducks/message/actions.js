import * as m from "./types";

const showMessage = (msg) => ({type: m.SHOW, payload: msg})

export {
	showMessage
}