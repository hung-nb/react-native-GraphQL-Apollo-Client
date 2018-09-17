import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class SelectDataClass extends Component {

    render() {

        console.log(this.props.data.loading)

        if (this.props.data.loading) {
            console.log('Loading')
            return (<Text>Loading GraphQL Data....</Text>)
        } else {
            console.log(this.props.data.categories)
            return (
                <View>
                    {this.props.data.categories.map( (item, index, array) => (
                        <View key={item.id}>
                            <Text>{item.id}</Text>
                            <Text>{item.name}</Text>
                        </View>
                    ))}
                </View>
            )
        }
    }
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList here)
const SelectGraphQL = graphql(gql`
    query {
        categories{
            id
            name
        }
    }
`)(SelectDataClass);

export { SelectGraphQL }