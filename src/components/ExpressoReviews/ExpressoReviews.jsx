import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Statistics } from '../Statistics.jsx/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions ';
import { Section } from 'components/Section/Section';

class ExpressoReviews extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addReviews = elem => {
    this.setState(prevState => ({ [elem]: (prevState[elem] += 1) }));
  };
  countTotalFeedback = () => {
    return Object.keys(this.state).reduce((acum, key) => {
      return acum + this.state[key];
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const totalFeed = this.countTotalFeedback();
    const { good } = this.state;
    return totalFeed !== 0 ? Math.round((good / totalFeed) * 100) : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <>
        <Section
          title="Please leave feedback"
          child={
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.addReviews}
            />
          }
        ></Section>
        <Section
          title="Statistics"
          child={
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          }
        >
          ( )
        </Section>
      </>
    );
  }
}
export default ExpressoReviews;