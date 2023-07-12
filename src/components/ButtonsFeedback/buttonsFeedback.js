import React from "react";
import PropTypes from "prop-types";
import {
  ButtonsBox,
  ButtonGood,
  ButtonNeutral,
  ButtonBad,
} from "./buttonsFeedback.styled";

export const ButtonsFeedback = ({ onButtonClick }) => {
  const handleClick = (buttonType) => {
    onButtonClick(buttonType);
  };

  return (
    <ButtonsBox>
      <ButtonGood onClick={() => handleClick("good")}>Good</ButtonGood>
      <ButtonNeutral onClick={() => handleClick("neutral")}>
        Neutral
      </ButtonNeutral>
      <ButtonBad onClick={() => handleClick("bad")}>Bad</ButtonBad>
    </ButtonsBox>
  );
};

ButtonsFeedback.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
