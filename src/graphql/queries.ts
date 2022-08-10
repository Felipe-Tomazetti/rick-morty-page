import gql from 'graphql-tag'

export const CHARACTERS_QUERY = gql`
  query Characters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`

export const characterInfosQuery = gql`
  query character ($id: ID!) {
    characters (id: $id) {
      results {
        name
        status
        species
        gender
        image
      }
    }
  }
`