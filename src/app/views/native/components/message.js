import React from 'react'
import {connect} from 'react-redux'
import { Container, Header, Content, Toast, Button, Text } from 'native-base';

const Message = ({message}) => (
    message 
    ?  <Alert color="success">{message}</Alert> 
    : null
)

export default connect(
	(state) => ({message: state.message})
)(Message)