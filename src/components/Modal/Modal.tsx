import React from "react";
import "antd/dist/antd.css";

import { Props } from "./Modal.type";
import { ModalStyled } from "./Modal.style";

export const ModalComponent = (props: Props) => {
  return (
    <ModalStyled
      data-testid="modal-wrapper"
      title={props.title}
      visible={props.visible}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      footer={props.footer}
      width="960px"
    >
      {props.children}
    </ModalStyled>
  );
};
