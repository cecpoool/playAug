import React from "react";
import styled from "styled-components";

import logo from "../../assets/ball.gif";

const Title = () => {
  return <Image src={logo} alt="Company Logo" />;
};

export default Title;

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;
