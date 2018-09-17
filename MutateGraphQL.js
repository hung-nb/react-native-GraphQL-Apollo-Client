import React, { Component } from 'react'
import {Button} from 'react-native';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class MutateGraphQLClass extends Component {
    render() {
        return (
            <Button
                title={'Create new category'}
                onPress={() => {
                    this.props.createCategory(
                        {"name": "aaaaaa"
                        })
                    .then((result) => {console.log(result)})
                    .catch((error) => {console.log(error)})
                }}>
            </Button>
        )
    }
}

// You can also use `graphql` for GraphQL mutations
const MutateGraphQL = graphql(
    gql`
      mutation createCategory($data:CategoryCreateInput!) {
        createCategory(input: $data) {
          id
          name
        }
      }
    `,
    {
      props: ({ mutate }) => ({
        createCategory: (data) => mutate({ variables: { data } }),
      }),
    },
  )(MutateGraphQLClass);

  export { MutateGraphQL }

/* 
// GraphiQL
      mutation createCategory($data:CategoryCreateInput!) {
        createCategory(input: $data) {
          id
          name
        }
      }
// Query variables
{
  "data": {
    "name": "aaaaaa"
  }
}
*/