import React from "react";
import { Card as CardAntd } from "antd";

import { CardStyles } from "./Card.style";
import { Props } from "./Card.type";
import Icon from "../Icon/Icon";
import { InfoIcon } from "../../assets/";

const Title = (props: Props) => (
  <div className="title-container">
    <span className="title">
      {props.title}
      {props.showInfo ? (
        <span className="icon">
          <Icon
            icon={{ component: () => <InfoIcon /> }}
            tooltip={{
              title: () => <span>prompt text</span>
            }}
          />
        </span>
      ) : null}
    </span>
    {props.threshold ? (
      <div className="threshold">{props.threshold}%</div>
    ) : null}
  </div>
);
const Card = (props: Props) => {
  return (
    <CardStyles>
      <CardAntd
        className="card"
        title={
          props.showInfo || props.threshold ? (
            <Title {...props} />
          ) : (
            <span>{props.title}</span>
          )
        }
        extra={props.extra || null}
      >
        {props.children}
      </CardAntd>
    </CardStyles>
  );
};

export default Card;
