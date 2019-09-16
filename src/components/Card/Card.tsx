import React from "react";
import { Card as CardAntd } from "antd";
import { CardStyles } from "./Card.style";
import { Props } from "./Card.type";
import Icon from "../Icon/Icon";

const Card = (props: Props) => {
  return (
    <CardStyles>
      <CardAntd
        title={
          props.showInfo ? (
            <span className="title">
              {props.title}
              <Icon
                icon={{ type: "info-circle",style:{color:"grey"}, theme:"filled" }}
                
                tooltip={{
                  title: () => <span>prompt text</span>
                }}
              />
            </span>
          ) : (
            <span>{props.title}</span>
          )
        }
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
