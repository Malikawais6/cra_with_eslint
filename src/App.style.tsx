import styled, { createGlobalStyle } from "styled-components";
import { Layout } from "antd";

export const AppStyles = createGlobalStyle`
  html body {
    background: #f0f2f5;
    
    * {
      @import url("../src/assets/visualt/styles.css");
      font-family: Visuelt;
      font-style: normal;
      font-stretch: normal;
      line-height: normal; 
      letter-spacing: normal;
      color: #56556c;
    }
  }
`;

export const AppMainStyle = styled(Layout.Content)`
  width: 1440px;
  margin: 0 auto;
`;
