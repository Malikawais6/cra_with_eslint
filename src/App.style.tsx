import  { createGlobalStyle } from "styled-components";

export const AppStyles = createGlobalStyle`
        html body {
          @import url("../src/assets/visualt/styles.css");
            font-family: Visuelt;
            font-style: normal;
            font-stretch: normal;
            line-height: normal; 
            letter-spacing: normal;

            .ant-layout-has-sider {
              min-height: calc(100vh - 62px);
              min-width: 1440px;
              overflow-y: auto;
            }
        }
`;
