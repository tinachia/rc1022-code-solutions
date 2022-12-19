import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickedTopicId: null };
    this.openTopic = this.openTopic.bind(this);
  }

  openTopic(event) {
    this.setState({ clickedTopicId: event.target.dataset.topicId });
    if (event.target.dataset.topicId === this.state.clickedTopicId) {
      this.setState({ clickedTopicId: null });
    }
  }

  render() {
    const topics = this.props.topics;
    const listItems = topics.map(topic => {
      const toggle = Number(this.state.clickedTopicId) === topic.id ? '' : 'hidden';
      return <li key={topic.id}>
        <div data-topic-id={topic.id} className='topic' onClick={this.openTopic}>
          {topic.name}
        </div>
        <div className={`details ${toggle}`}>{topic.details}</div>
      </li>;
    });
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}
