import React from "react";
import Editable from "./Editable/Editable";
import { TableStyles } from "./Table.style";
import "../../assets/visualt/styles.css";

export const Table = (props: any) => {
  return (
    <TableStyles>
      <Editable buttonTitle={props.buttonTitle} />
    </TableStyles>
  );
};
