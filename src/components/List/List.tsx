import React, { useState } from "react";
import { List as AntdList, Switch, Menu, Dropdown, Icon, Row, Col } from "antd";
import "antd/dist/antd.css";
import { IconStyles } from "./List.style";
import { CaretDownBlue } from "../../assets";
const menu = (setstate: any, index: number) => (
  <Menu
    onClick={(e: any) => {
      setstate({ value: e.item.props.children, index });
    }}
  >
    <Menu.Item key="a">1st menu item {index}</Menu.Item>
    <Menu.Item key="b">2nd menu item {index}</Menu.Item>
    <Menu.Item key="c">3rd menu item {index}</Menu.Item>
  </Menu>
);
const List = () => {
  const [state, setstate] = useState({ value: "Hover Me", index: -1 });
  const data = [
    {
      title: "Ant Design Title 1"
    },
    {
      title: "Ant Design Title 2"
    },
    {
      title: "Ant Design Title 3"
    },
    {
      title: "Ant Design Title 4"
    }
  ];
  return (
    <IconStyles>
      <AntdList
        itemLayout="horizontal"
        dataSource={data}
        className="list"
        renderItem={(item: any, index: number) => (
          <AntdList.Item>
            {/* <AntdList.Item.Meta
              title={<span className="title">{item.title}</span>}
            />
            <span className="content">
              <span className="show-graph">Show Graph</span>
              <span>
                <Switch defaultChecked />
              </span>
              {console.log(item, index)}
              <span>Visibilty</span>
              <span className="dropdown">
                {" "}
                <Dropdown overlay={menu(setstate, index)} >
                  <a  href="#">
                    {state.index === index ? (
                      <span>
                        {state.value} <Icon component={()=><CaretDownBlue />} />
                      </span>
                    ) : (
                      <span>
                        Hover Me <Icon component={()=><CaretDownBlue />} />
                      </span>
                    )}
                  </a>
                </Dropdown>
              </span>
            </span> */}
            <Row type="flex">
              <Col span={12}>
                <span className="title">{item.title}</span>
              </Col>
              <Col span={12} className="content">
                <Col span={6}></Col>
                <Col span={3}>Show Graph</Col>
                <Col span={4}>
                  <Switch defaultChecked />
                </Col>
                <Col span={2}></Col>
                <Col span={3}>Visibilty</Col>
                <Col span={5}>
                  <Dropdown overlay={menu(setstate, index)}>
                    <a href="#">
                      {state.index === index ? (
                        <span>
                          {state.value}{" "}
                          <Icon component={() => <CaretDownBlue />} />
                        </span>
                      ) : (
                        <span>
                          Hover Me <Icon component={() => <CaretDownBlue />} />
                        </span>
                      )}
                    </a>
                  </Dropdown>
                </Col>
              </Col>
            </Row>
          </AntdList.Item>
        )}
      />
    </IconStyles>
  );
};

export default List;
