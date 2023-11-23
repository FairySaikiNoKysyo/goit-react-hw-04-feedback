import { FeedBackOptions } from 'components/FeedBackOptions/FeedBackOptions';
import { Notification } from 'components/NoFeedback/Notification';
import { Section } from 'components/Section/Section';
import { Statistic } from 'components/Statistic/Statistic';
import { Component } from 'react';
export class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;

    const percentage = (good / total) * 100;
    if(percentage){
        return Math.ceil(percentage);
    }
    else{
        return 0;
    }
    
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const  total = good + bad + neutral;
    return total;
  };
  handleClick = option => {
    this.setState(prevState => {
      

      return { [option]: prevState[option] + 1 };
    });
  };
  render() {
    const options = Object.keys(this.state);
    return (
      <div>
        <Section title = "Leave me Feedback">
        <FeedBackOptions options={options} onLeaveFeedback={this.handleClick}/>
        </Section>
        <Section title = "Statistic">
        {this.countTotalFeedback() > 0 ? <Statistic 
       good={this.state.good}
        neutral={this.state.neutral}
         bad={this.state.bad} 
         total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()} /> 
        : <Notification message='There is no feedback'/>
        }
        </Section>
       
      </div>
    );
  }
}
