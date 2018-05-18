/* eslint-disable no-unused-expressions */
import { injectGlobal } from "styled-components";

export default () => {
    injectGlobal` 
        .fade.show {
		    opacity: 1;
		}
    `;

    return null;
};