import React from "react";
import styled from "styled-components";
import { AppStyles } from "../App.style";

const StoryWrapperStyle = styled.div`
  background-color: #f7f7f9;
  padding: 4em;
`;

export const StoryWrapper = (props: any) => {
  return (
    <StoryWrapperStyle>
      <AppStyles />
      {props.children}
    </StoryWrapperStyle>
  );
};
