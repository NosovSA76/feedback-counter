import React from "react";
import PropTypes from "prop-types";
import { Title } from "./title.styled";

export const TitleFeedback = ({ text }) => {
  return <Title>{text}</Title>;
};

TitleFeedback.propTypes = {
  text: PropTypes.string.isRequired,
};
