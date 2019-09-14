import React from "react";
import { Card as CardAntd } from "antd";
import { CardStyles } from "./Card.style";
import { Props } from "./Card.type";
const Card = (props: Props) => {
  return (
    <CardStyles>
      <CardAntd
        title={props.title}
        extra={props.extra || null}
        style={{
          width: props.width || "33vw",
          height: props.height,
          borderRadius: "10px",
          margin: "1%"
        }}
      >
        {props.children}
      </CardAntd>
    </CardStyles>
  );
};

export default Card;
