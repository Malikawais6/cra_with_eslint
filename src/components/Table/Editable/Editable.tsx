import React, { FC, useContext } from "react";
import { Table, Form } from "antd";
import useProps from "./useProps";
import EditableWrapper from "../Table.style";
import { EditableProps } from "../Table.types";
import { AddPanel } from "../AddPanel";
import { TableContext } from "../../../context/index";
import { DeletePanel } from "../DeletePanel";

const Editable: FC<EditableProps> = ({ form, ...resProps }) => {
  const { columns, data, onEdit } = useContext(TableContext);
  const { key, title, dataIndex } = columns[columns.length - 1];
  if (key || title || dataIndex) {
    columns.push({
      title: "",
      dataIndex: "",
      key: "",
    render: (text:any,row:any,index:any) =>{return <DeletePanel row={row} index={index}/>},
      editable: false
    });
  }
  const { cacheSource, editColumns } = useProps(data, columns, onEdit, form);
  return (
    <EditableWrapper>
      <Table
        dataSource={cacheSource}
        columns={editColumns}
        {...resProps}
        pagination={false}
        footer={() => <AddPanel buttonTitle={resProps.buttonTitle} />}
      />
    </EditableWrapper>
  );
};

export default Form.create<any>()(Editable);
