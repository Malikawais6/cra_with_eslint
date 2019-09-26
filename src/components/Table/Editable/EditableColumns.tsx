import * as React from 'react';
import Cell from './Cell';
import { CellType } from '../Table.types';
import { EditableColumn } from '../Table.interfaces';

export default <T extends object>(
  columns: Array<EditableColumn<T>>,
  curCell: CellType,
  setCurCell: any,
  form: any,
) => {
  const dataIndexMap: string[] = [];
  const iterateColumns = (iColumns: Array<EditableColumn<T>>): T[] => {
    return iColumns.map((item: any) => {
      if (item.children) {
        const { children, ...resCol } = item;
        return {
          ...resCol,
          children: iterateColumns(children),
        };
      } else {
        const { render, dataIndex, editable = true, rules, children, ...res } = item;
        if (editable) {
          dataIndexMap.push(dataIndex);
        }
        const resItem = {
          dataIndex,
          ...res,
          render: (text: string, record: any, rowIndex: number) => {
            const { editable: rowEditbale = true } = record;
            const initialValue = render ? render(text, record, rowIndex) : text;
            if (rowEditbale && editable) {
              const cellprops = {
                form,
                key: `${dataIndex}-${rowIndex}`,
                dataIndex,
                rowIndex,
                curCell,
                onSetCurCell: setCurCell,
                initialValue,
                rules,
              };
              return <Cell {...cellprops} />;
            }
            
            return <div className="editable-cell-uneditable">{initialValue}</div>;
          },
        };
        return resItem;
      }
    });
  };
  return {
    editColumns: iterateColumns(columns),
    dataIndexMap,
  };
};
