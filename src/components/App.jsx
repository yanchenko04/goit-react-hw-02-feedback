import React from "react"
import css from './App.module.css'
import TitleFeedback from "./TitleFeedback/TitleFeedback"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Statistics from "./Statistics/Statistics"
import Notification from "./Notification/Notification"



export class App  extends React.Component{
  state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
      addClick = option => {
        this.setState(prevState => {
          return { [option]: prevState[option] + 1 };
        });
      };

      countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
      };
    
      positiveFeedback = () => {
        const { good } = this.state;
        return parseInt((good / this.countTotalFeedback()) * 100 || 0);
      };
    

  render(){
      const { good, neutral, bad } = this.state;
      return(
          <div className={css.main_container}>
            <TitleFeedback
            title="Please leave feedback"
            />
            <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addClick}
            
            />
             {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.positiveFeedback()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
          </div>
      )

  }
}
