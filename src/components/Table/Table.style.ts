import styled from "styled-components";

export const EditableWrapper = styled.div`
  .ant-form-item {
    margin-bottom: 0;
  }
  .ant-form-item-control {
    line-height: 24px;
  }
  .editable-cell-uneditable {
    padding: 5px 12px;
    width: 73px;
    height: 18px;
    font-family: Visuelt;
    font-size: 13px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #56556c;
  }
  .ant-table-thead > tr > th {
    background: none !important;
  }
  .ant-table-thead
    > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)
    > td,
  .ant-table-tbody
    > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)
    > td,
  .ant-table-thead
    > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)
    > td,
  .ant-table-tbody
    > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)
    > td {
    background: none;
  }
  .editable-cell-value-wrap {
    padding: 5px 12px;
    cursor: pointer;
    width: 64px;
    height: 18px;
    font-family: Visuelt;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: #56556c;
  }
  .ant-input {
    width: 70px;
  }
  .ant-table-tbody > tr > td {
    border-bottom: 1px solid #e8e8e8;
    -webkit-transition: all 0.3s, border 0s;
    transition: all 0.3s, border 0s;
  }
  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    padding: 1% 1% !important;
  }
  .editable-row:hover {
    .editable-cell-value-wrap {
      border-radius: 4px;
    }
  }
  .ant-table-footer {
    background: none !important;
  }
  .ant-table-thead > tr > th {
    font-family: Visuelt;
    font-size: 13px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: #56556c;
  }
  

`;

export const TableStyles = styled.div`
  width: "90vw";
  box-shadow: inset 0 -1px 0 0 #dbdbe6;
  margin: 2%;
  background-color: white;
  .alertBox {
    border-radius: 8px;
    box-shadow: 0 18px 58px 0 rgba(0, 0, 0, 0.07),
      0 8px 18px -10px rgba(0, 0, 0, 0.16);
    border: solid 1px #dbdbe6;
    background-color: #ffffff;
    width: 25vw;
    padding: 5%;
  }
  
  .dropdown {
    width: 20vw;
    border-radius: 4px;
    background-color: #ffffff;
    font-family: Visuelt;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 2;
    letter-spacing: normal;
    color: #56556c;
  }
  .panel{
    display: flex !important;
   
  }
  .dropdown-icon{
    margin: 1% 0 0 60%;
  }
 
  .icon-more{
    margin: -40px 0 0px 0px;
  }
  .addButton{
    margin: 0 0 0 3%;
    border-radius: 4px;
    box-shadow: 0 8px 18px -10px #0e99ae;
    background-color: #22bcd3;
    color: white;
  }
  .remove {
    width: 133px;
    height: 21px;
    font-family: Visuelt;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #56556c;
    padding: 0 0 0 5% !important;
  }
  .remove .text-style-1 {
    font-weight: normal;
  }
  .confirmation{
    margin-left:-2%
  }
`;
export const GoalButtonStyle = styled.span`
  display: flex;
  .text {
    display: flex;
    padding: 0.4% 0px 0 1%;
    font-family: Visuelt;
    font-size: 13px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #40d1e7;
  }
`;

export default EditableWrapper;
