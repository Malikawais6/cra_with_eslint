import styled from "styled-components";
import "antd/dist/antd.css";
import { Modal } from "antd";

export const ModalStyled = styled(Modal)`
  .ant-modal-body {
    padding-bottom: 41px;
    margin-top: -15px;
  }
  .ant-modal-close {
    padding-top: 10px;
    width: 64px;
    .ant-modal-close-x {
      font-size: 20px;
    }
  }
  .ant-modal-header {
    border-bottom: none;
    padding-top: 27px;
    .ant-modal-title {
      font-size: 24px;
      font-weight: 500;
    }
  }
`;
export const LineChartStyled = styled.div`
  height: 430px;
  width: 880px;
`;
