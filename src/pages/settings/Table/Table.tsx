import React from "react";
import Editable from "./Editable/Editable";
import { TableStyles } from "./Table.style";
import "../../../visualt/styles.css";

export const Table = (props:any) => {
  return (
    <TableStyles>
      <Editable buttonTitle={props.buttonTitle}/>
    </TableStyles>
  );
};
