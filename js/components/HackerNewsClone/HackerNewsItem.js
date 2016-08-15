import React from 'react';
import Relay from 'react-relay';

class HackerNewsItem extends React.Component {
  render() {
    let item = this.props.hnItem.node;
    let time = new Date(item.createdAt);
    time = time.toString();
    let mailto;
    let email;
    if (item.author && item.author.username) {
      mailto = "mailto:" + item.author.username;
      email = item.author.username;
    }
    mailto = "mailto:support@scaphold.io";
    email = "support@scaphold.io";

    return (
      <div>
        <h1><em>{this.props.num + 1}.</em> <a href={item.url}>{item.title}</a></h1>
        <h3>{item.score} points by <a href={mailto}>{email}</a></h3>
        <h5>at {time}</h5>
        <hr />
      </div>
    );
  }
}

export default Relay.createContainer(HackerNewsItem, {
  fragments: {
  },
});
