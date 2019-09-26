import { FormComponentProps } from "antd/lib/form";
import { EditableProps } from "./Table.interfaces";

export type CellType = {
  dataIndex: string;
  rowIndex: number;
} | null;

export type EditableProps = FormComponentProps & EditableProps<any>;

export type TableContextType = {
  data?: any;
  dispatch?: any;
  onAdd?: any;
  onDelete?: any;
  onEdit?: any;
  columns?:any;
};
