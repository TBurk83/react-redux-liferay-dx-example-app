import React from 'react'
import { Link } from 'react-router-native'

const FilterLink = ({ filter, children }) => (
    <Link
	    to={filter === 'all' ? '/' : `/${ filter }`}
	    activeStyle={ {
	      textDecoration: 'none',
	      color: 'black'
	    }}
	  >
    {children}
  </Link>
)

export default FilterLink