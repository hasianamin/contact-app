import React from "react";
import styled from "@emotion/styled";

const CardWrapper = styled.div`
  max-width: 800px;
  margin: 0 10px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);

  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;
