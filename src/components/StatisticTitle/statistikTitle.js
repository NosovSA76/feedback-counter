import React from "react";
import PropTypes from "prop-types";
import { Title } from "./statisticTitle.styled";

export const TitleStatistic = ({ text }) => {
  return <Title>{text}</Title>;
};

TitleStatistic.propTypes = {
  text: PropTypes.string.isRequired,
};
