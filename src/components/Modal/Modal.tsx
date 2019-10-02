import React from "react";
import "antd/dist/antd.css";

import { Props } from "./Modal.type";
import { ModalStyled } from "./Modal.style";

export const ModalComponent = (props: Props) => {
  const { title, visible, handleOk, handleCancel, footer } = props;
  return (
    <ModalStyled
      data-testid="modal-wrapper"
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={footer}
      width="960px"
    >
      {props.children}
    </ModalStyled>
  );
};
