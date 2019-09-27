
 import { CardProps } from 'antd/lib/card/';
export interface Props extends CardProps {
  height?:string,
  width?:string,
  showInfo?:boolean,
  threshold?:number,
  cardType? :"visual" | "cost"
}