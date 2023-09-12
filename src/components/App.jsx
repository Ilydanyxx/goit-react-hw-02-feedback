import { Container } from '@mui/material';
import { Component } from 'react';
import Statistics from './Statistics/Statistics';

export class App extends Component {
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
    return (
      <Container maxWidth="xl">
        <p>please leave feedback</p>
        <button type="button">good</button>
        <div>`{this.state.good}`</div>
      </Container>
    );
  }
}
