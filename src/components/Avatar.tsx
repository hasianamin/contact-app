import React from "react";
import styled from "@emotion/styled";

const AvatarWrapper = styled.div`
  height: 68px;
  width: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-radius: 100%;
  background: gray;
  color: white;
  font-weight: bold;
  @media (min-width: 768px) {
    height: 80px;
    width: 80px;
  }
`;

const Avatar: React.FC<{ first_initial: string; second_initial: string }> = ({
  first_initial,
  second_initial,
}) => {
  return <AvatarWrapper>{`${first_initial} ${second_initial}`}</AvatarWrapper>;
};

export default Avatar;
