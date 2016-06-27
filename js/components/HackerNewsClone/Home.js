import React from 'react';
import Relay from 'react-relay';
import {Button} from 'react-bootstrap';
import {hashHistory} from 'react-router';
import Header from './Header';
import HackerNewsItems from './HackerNewsItems';

class Home extends React.Component {
  render() {
    if (!localStorage.scapholdAuthToken) {
      hashHistory.push('/');
    }

    return (
      <div>
        <Header />
        <ul>
          <HackerNewsItems allHackerNewsItems={this.props.allHackerNewsItems.allHackerNewsItems} />
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(Home, {
  initialVariables: {
    input: null,
    orderBy: null
  },
  fragments: {
    allHackerNewsItems: (variables) => {
      return Relay.QL `
        fragment on Viewer {
          allHackerNewsItems (first: 10, orderBy: $orderBy) {
            edges {
              node {
                id,
                createdAt,
                modifiedAt,
                title,
                score,
                url,
                author {
                  id,
                  username
                }
              }
            }
          }
        }
      `
    }
  }
});
