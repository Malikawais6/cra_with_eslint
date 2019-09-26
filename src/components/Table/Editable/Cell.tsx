import React, { FC, useEffect, RefObject } from "react";
import { Input, Form } from "antd";
import { CellProps } from "../Table.interfaces";
import Icon from "../../Icon/Icon";
import { AddIconGrey } from "../../../assets";
const Item = Form.Item;

const Cell: FC<CellProps> = ({
  form,
  dataIndex,
  rowIndex,
  curCell,
  onSetCurCell,
  initialValue,
  rules = []
}) => {
  const isEditing: boolean =
    (curCell &&
      curCell.dataIndex === dataIndex &&
      curCell.rowIndex === rowIndex) ||
    false;

  const inputRef = useFocus(isEditing);

  function handleSetCurCell() {
    onSetCurCell({
      dataIndex,
      rowIndex
    });
  }
  function handleSave() {
    form.validateFields([`${dataIndex}-${rowIndex}`], (err: object) => {
      if (!err) {
        onSetCurCell(null);
      }
    });
  }

  const stockCell = initialValue ? (
    <div onClick={handleSetCurCell} className="editable-cell-value-wrap">
      {initialValue}
    </div>
  ) : (
    <span onClick={handleSetCurCell} className="editable-cell-value-wrap">
      <Icon icon={{ component: () => <AddIconGrey /> }} />
    </span>
  );

  return (
    <Item>
      {form.getFieldDecorator(`${dataIndex}-${rowIndex}`, {
        initialValue: initialValue === "--" ? "" : initialValue,
        rules
      })(
        isEditing ? (
          <Input ref={inputRef} onPressEnter={handleSave} onBlur={handleSave} />
        ) : (
          stockCell
        )
      )}
    </Item>
  );
};

const useFocus = (isEditing: boolean) => {
  const inputRef: RefObject<Input> = React.createRef();

  useEffect(() => {
    if (isEditing) {
      if (inputRef.current) inputRef.current.focus();
    }
  }, [isEditing, inputRef]);

  return inputRef;
};

export default Cell;
