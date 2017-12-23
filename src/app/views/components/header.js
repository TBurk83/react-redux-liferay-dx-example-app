import React from 'react'
import { Nav, NavItem } from 'reactstrap';
import FilterLink from './FilterLink'

const Header = () => (
  <Nav pills>
      <NavItem>
          <FilterLink filter="all">
              All
          </FilterLink>
      </NavItem>
      <NavItem>
          <FilterLink filter="active">
              Active
          </FilterLink>
      </NavItem>
      <NavItem>
          <FilterLink filter="completed">
              Completed
          </FilterLink>
      </NavItem>
  </Nav>
)

export default Header