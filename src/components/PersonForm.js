import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label sm={2}>First Name</Label>
         <Col sm={10}>
            <Field
              name="firstName"
              component="Input"
              type="text"
              placeholder="First Name"
            />
          </Col>
      </FormGroup>
      <FormGroup>
        <Label>Last Name</Label>
          <Field
            name="lastName"
            component="Input"
            type="text"
            placeholder="Last Name"
          />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
          <Field
            name="email"
            component="Input"
            type="email"
            placeholder="Email"
          />
      </FormGroup>
      <FormGroup>
        <Label>Sex</Label>
          <Label>
            <Field
              name="sex"
              component="Input"
              type="radio"
              value="male"
            />{' '}
            Male
          </Label>
          <Label>
            <Field
              name="sex"
              component="Input"
              type="radio"
              value="female"
            />{' '}
            Female
          </Label>
      </FormGroup>
      <FormGroup>
        <Label>Favorite Color</Label>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="employed">Employed</Label>
          <Field
            name="employed"
            id="employed"
            component="Input"
            type="checkbox"
          />
      </FormGroup>
      <FormGroup>
        <Label>Notes</Label>
          <Field name="notes" component="textarea" />
      </FormGroup>
      <FormGroup>
        <Button type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </FormGroup>
    </Form>
    )
}

export default reduxForm({
    form: 'simple' // a unique identifier for this form
})(SimpleForm)