import { FeedBackOptions } from 'components/FeedBackOptions/FeedBackOptions';
import { Notification } from 'components/NoFeedback/Notification';
import { Section } from 'components/Section/Section';
import { Statistic } from 'components/Statistic/Statistic';
import {  useState } from 'react';
export const FeedBack = props => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + bad + neutral;
  const options = ['good','bad','neutral'];
 const  onLeaveFeedback = (option)=>{
  switch(option){
    case 'good':
      setGood(prevState => (prevState + 1));
      break;
      case 'bad' : 
      setBad(prevState => (prevState + 1));
      break;
      case 'neutral': 
      setNeutral(prevState => (prevState + 1));
      break;
      default: ;
  }

 }

  const countPositiveFeedbackPercentage = () => {
    const percentage = (good / total) * 100;
    if (percentage) {
      return Math.ceil(percentage);
    } else {
      return 0;
    }
  };
  return (
    <div>
      <Section title="Leave me Feedback">
        <FeedBackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistic">
        {total > 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  // countPositiveFeedbackPercentage = () => {
  //   const { good, bad, neutral } = this.state;
  //   const total = good + bad + neutral;

  //   const percentage = (good / total) * 100;
  //   if(percentage){
  //       return Math.ceil(percentage);
  //   }
  //   else{
  //       return 0;
  //   }

  // };
  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   const  total = good + bad + neutral;
  //   return total;
  // };
  // handleClick = option => {
  //   this.setState(prevState => {

  //     return { [option]: prevState[option] + 1 };
  //   });
  // };
  //
  //   const options = Object.keys(this.state);
        }
