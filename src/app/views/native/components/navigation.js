import React from 'react'
import FilterLink from './filterLink'
import { Header, Button, Text } from 'native-base';
const Navigation = () => (
  <Header>
      <FilterLink filter="all">
          <Button hasText>
              <Text>
                  All
              </Text>
          </Button>
      </FilterLink>
      <FilterLink filter="active">
          <Button hasText>
              <Text>
                  Active
              </Text>
          </Button>
      </FilterLink>
      <FilterLink filter="completed">
          <Button hasText>
              <Text>
                  Completed
              </Text>
          </Button>
      </FilterLink>
  </Header>
)

export default Navigation