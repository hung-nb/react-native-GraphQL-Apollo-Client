import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import { ApolloProvider } from 'react-apollo';

class App extends Component {

  createClient() {
    // Initialize Apollo Client with URL to our server
    return new ApolloClient({
      link: new HttpLink({ uri: 'https://xxxxxxxx/graphql' }),
      cache: new InMemoryCache()
    })
  }

  render() {
    return (
      <ApolloProvider client={this.createClient()}>
        <Provider store={store}>
          <ConnectedRootContainer />
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
