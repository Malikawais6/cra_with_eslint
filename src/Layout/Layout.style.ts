import styled from "styled-components";


export const HeaderStyles = styled.header`
  .mode-div {
    display: flex;
    width: 45%;
  }
  .logo-div {
    display: flex;
    width: 100%;
    
  }
  .ant-layout-header {
    width: 100%;
    height: 64px;
    background-color: #ffffff;
    padding: 18px 32px 18px 32px;
    display: flex;
  }
  .logo {
    height: 30px;
    width: 100px;
    margin: -13px 13px 0 0px;
  }
  .kpi-dashboard {
  
    font-family: Visuelt;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.88px;
    color: #dbdbe6;
  }
  .presentation-icon {
      display:flex;
  }
  .presentation-mode {
    font-family: Visuelt;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #56556c;
    margin: 0 0 0 1%;
  }
  .dropdown {
    font-family: Visuelt;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #56556c;
    margin: 0 0 0 5%;
  }
  .dropdown > a {
    color: #56556c;
    display: flex;
  }
  .ant-select,
  .ant-select-enabled,
  .ant-select-open,
  .ant-select-focused > div {
    border: 1px solid transparent !important;
  }
  .ant-select-selection,
  .ant-select-selection--single {
    border: 1px solid transparent !important;
  }
`;
export const SidebarStyles = styled.aside`
  .ant-layout-sider-children {
    width: 100%;
    height: 100vh;
    background-color: #242338;
  }
`;

export const ContentStyles = styled.main`
  width: 100%;
  height: 100vh;
  box-shadow: inset 0 -1px 0 0 #dbdbe6;
  background-color: rgba(216, 216, 216, 0);
`;
