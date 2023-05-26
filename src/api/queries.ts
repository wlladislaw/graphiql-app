import { gql } from '@apollo/client';

export const charactersQuery = gql`
  query charactersQuery {
    characters {
      results {
        name
      }
    }
  }
`;
