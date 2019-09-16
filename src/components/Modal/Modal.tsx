import React from "react";
import { Modal as AntdModal } from "antd";
import "antd/dist/antd.css";

import { Props } from "./Modal.type";
import { ModalStyled } from "./Modal.style";

export const ModalComponent = (props: Props) => {
  return (
    <ModalStyled data-testid="modal-wrapper">
      <AntdModal
        title={props.title}
        visible={props.visible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
        footer={props.footer}
      >
        {props.children}
      </AntdModal>
    </ModalStyled>
  );
};
