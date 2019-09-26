import { useState, useEffect, useMemo, useRef } from "react";
import EditableColumns from "./EditableColumns";
import { CellType } from "../Table.types";
import { EditableColumn } from "../Table.interfaces";

const useProps = <T extends object>(
  dataSource: T[],
  columns: Array<EditableColumn<T>>,
  onCellChange: (nextSource: T[]) => void,
  form: any
) => {
  //The currently active cell, the default is null
  const [curCell, setCurCell] = useState<CellType>(null);

  // Internally maintained dataSource
  const { cacheSource, setCacheSource } = useDataSource(dataSource, form);

  // Record each updated cell with ref
  const beforeCell = useRef<CellType>(null);
  // Use useMemo to cache editColumns and dataIndexMap. Updated only after changes to columns and curCell
  const { editColumns } = useMemo(
    () => EditableColumns(columns, curCell, handleSetCurCell, form),
    [columns, curCell]
  );

  // Change the cached dataSource whenever the curCell changes. And execute onCellChange
  useEffect(() => {
    if (beforeCell && beforeCell.current) {
      const { dataIndex, rowIndex } = beforeCell.current;
      const value = form.getFieldValue(`${dataIndex}-${rowIndex}`);
      const nextSource = JSON.parse(JSON.stringify(cacheSource));
      nextSource[rowIndex][dataIndex] = value;
      setCacheSource(nextSource);
      onCellChange(nextSource);
    }
    beforeCell.current = curCell;
  }, [curCell]);

  function handleSetCurCell(nextCell: CellType) {
    if (
      !curCell ||
      !form.getFieldError(`${curCell.dataIndex}-${curCell.rowIndex}`)
    ) {
      setCurCell(nextCell);
    }
  }

  return {
    cacheSource,
    editColumns
  };
};

const useDataSource = (dataSource: any[], form: any) => {
  const [cacheSource, setCacheSource] = useState(dataSource);
  useEffect(() => {
    setCacheSource(dataSource);
    form.resetFields();
  }, [dataSource]);

  return {
    cacheSource,
    setCacheSource
  };
};

export default useProps;
