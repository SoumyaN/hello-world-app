import React, {Component} from 'react';

export class Main extends Component {

  constructor() {
    super();
    console.log('in constructor');
  }
  componentWillMount() {
    console.log('in component will mount');
  }
  componentDidMount() {
    console.log('in component did mount');
  }
  componentWillReceiveProps() {
    console.log('in component will receive props');
  }
  componentWillUpdate() {
    console.log('in component will update');
  }

  render() {
    console.log('in render');
    return <div>Hello world</div>;
  }
}

