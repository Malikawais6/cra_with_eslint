import { CellType } from "./Table.types";
import { TableProps, ColumnProps } from 'antd/lib/table';
import { ValidationRule, FormComponentProps } from 'antd/lib/form';
import { ButtonProps } from 'antd/lib/button';
export interface CellProps {
  form: any;
  dataIndex: string;
  rowIndex: number;
  curCell: CellType;
  onSetCurCell: (curCell: CellType) => void;
  initialValue: any;
  rules: ValidationRule[];
}

export interface EditableColumn<T> extends ColumnProps<T> {
  editable?: boolean;
  rule?: ValidationRule[];
}

export interface EditableProps<T> extends TableProps<T> {
  columns?: Array<EditableColumn<T>>;
  onCellChange?: (nextSource: T[]) => void;
  buttonTitle?: string;
}
