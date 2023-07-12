import React from "react";
import PropTypes from "prop-types";
import {
  StatGood,
  StatNeutral,
  StatBad,
  StatField,
  TotalScore,
  Percentage,
} from "./statistics.styled";

export const FieldStatistic = ({
  good,
  neutral,
  bad,
  totalScore,
  percentage,
  backgroundColor,
  goodPercentage,
}) => {
  return (
    <StatField>
      <StatGood>Good:{good}</StatGood>{" "}
      <StatNeutral>Neutral:{neutral}</StatNeutral>
      <StatBad>Bad:{bad}</StatBad>
      <TotalScore>Total:{totalScore}</TotalScore>
      <Percentage>Positive feedback:{goodPercentage}%</Percentage>
      <Percentage style={{ backgroundColor }}>
        Percentage of satisfaction:{percentage}%
      </Percentage>
    </StatField>
  );
};

FieldStatistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  goodPercentage: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  totalScore: PropTypes.number.isRequired,
};
