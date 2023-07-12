import React, { useState } from "react";
import { ButtonsFeedback } from "./components/ButtonsFeedback/buttonsFeedback";
import { getBackgroundColor } from "./utils/bacgrond";
import { BoardFeedback } from "./components/FeedbackBoard/feedbackBoard";
import { TitleFeedback } from "./components/Title/title";
import { TitleStatistic } from "./components/StatisticTitle/statistikTitle";
import { FieldStatistic } from "./components/Statistics/statistics";

export const App = () => {
  const [feedbackCounts, setFeedbackCounts] = useState({
    bad: 0,
    good: 0,
    neutral: 0,
  });

  const handleButtonClick = (buttonType) => {
    setFeedbackCounts((prevCounts) => ({
      ...prevCounts,
      [buttonType]: prevCounts[buttonType] + 1,
    }));
  };

  const { good, neutral, bad } = feedbackCounts;
  let total = good + neutral + bad;
  let totalScore = good * 1 + neutral * 0.5 + bad * 0;
  let goodPercentage = Math.round((good / total) * 100);
  let percentage = Math.round((totalScore / total) * 100);
  const backgroundColor = getBackgroundColor(percentage, total);

  return (
    <BoardFeedback>
      <TitleFeedback text="Please leave feedback" />
      <ButtonsFeedback onButtonClick={handleButtonClick} />
      <TitleStatistic text="Statistic" />
      {total === 0 ? (
        <p>No feedback</p>
      ) : (
        <FieldStatistic
          good={good}
          neutral={neutral}
          bad={bad}
          totalScore={total}
          goodPercentage={goodPercentage}
          percentage={percentage}
          backgroundColor={backgroundColor}
        />
      )}
    </BoardFeedback>
  );
};
