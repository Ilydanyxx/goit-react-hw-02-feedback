import { Container } from '@mui/material';
import { Component } from 'react';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  render() {
    return <Container maxWidth="xl"></Container>;
  }
}
