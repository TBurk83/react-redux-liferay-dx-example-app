import React from 'react'
import {connect} from 'react-redux'

import { Alert } from 'reactstrap';

const Message = ({message}) => (
    message 
    ?  <Alert color="success">{message}</Alert> 
    : null
)

export default connect(
	(state) => ({message: state.message})
)(Message)