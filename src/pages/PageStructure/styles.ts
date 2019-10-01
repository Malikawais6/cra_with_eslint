import styled from "styled-components";

interface PageStructureStyleProps {
  headerBorderBottom?: boolean;
}
export const PageStructureStyle = styled("section")<PageStructureStyleProps>`
  .page-header {
    display: grid;
    grid-template-columns: auto 321px;
    margin: 0 -8px;
    border-bottom: ${props =>
      props.headerBorderBottom ? "1px solid #dbdbe6" : "none"};

    .module-title {
      font-size: 14px;
      font-weight: normal;
    }

    .page-title {
      display: flex;

      > h1 {
        font-size: 28px;
      }
    }

    .date-time {
      padding: 1.2em 0;
      font-size: 12px;
      color: #56556c;
      margin-left: 1em;
    }
  }

  .page-content {
    margin: 0 -0.5em;
  }

  .container {
    box-shadow: ${(props: any) =>
      props.settings ? "none" : "inset 0 -1px 0 0 #dbdbe6"};
    background-color: rgba(216, 216, 216, 0);
  }

  .module-title {
    font-size: 14px;
    font-weight: 500;
    color: #56556c;
  }

  .heading {
    font-size: 28px;
    font-weight: 500;
    line-height: 1.14;
    color: #56556c;
    float: left;
    flex-grow: 1;
  }

  .inner-container {
    display: flex;
  }
  .buttons {
    float: right;
    display: flex;
  }

  .content {
    align-self: center;
    padding-top: 0.5em;
  }
  .inner-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1em 0 1em 0;
  }
  .settings {
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    width: 265px;
    height: 51px;
    border-radius: 8px;
    box-shadow: 0 8px 18px -10px #0e99ae;
    background-color: #22bcd3;
  }
`;
