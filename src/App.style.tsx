import { createGlobalStyle } from "styled-components";

export const AppStyles = createGlobalStyle`
        html body {
          @import url("../src/assets/visualt/styles.css");
          font-family: Visuelt;
          font-style: normal;
          font-stretch: normal;
          line-height: normal; 
          letter-spacing: normal;
          background: #f0f2f5;
          
          #root {
            > .ant-layout {
              width: 1440px;
              margin: 0 auto;
            }
          }

            .ant-layout-has-sider {
              min-height: calc(100vh - 62px);
              overflow-y: auto;
            }
        }
`;
