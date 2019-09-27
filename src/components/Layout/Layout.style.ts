import { Responsive, WidthProvider } from 'react-grid-layout';
import styled from "styled-components";
const ResponsiveGridLayout = WidthProvider(Responsive);
export const GridLayoutStyle = styled(ResponsiveGridLayout)`
  .react-grid-item {
    background: white;
    border-radius: 8px;
    box-shadow: 0 7px 14px 0 rgba(48, 50, 54, 0.1);
    background-color: #ffffff;
  }
`;
