import React from 'react';
import { Menu, Icon, Row, Col} from 'antd';

const style = {
  header: {
    background: "#fff",
    borderBottom: "1px solid #eee",
    marginBottom: "24px",
    padding: "0 4%",
    width: "100%",
  },
  mainWrapper: {
    background: "#fff",
    width: "92%",
    margin: "0 auto",
    borderRadius: "4px",
    overflow: "hidden",
    padding: "24px 6% 120px 4%",
    marginBottom: "24px",
    position: "relative"
  }
};

export default class Header extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    console.log(e.key)
  }

  render(){
    return (
      <header style={style.header}>
        <Row>
          <Col span={2}><h3 style={{padding: "13px 0px"}}>AppName</h3></Col>
          <Col span={22}>
            <Menu mode="horizontal" onClick={this.handleClick}>
              <Menu.Item key="home">
                <Icon type="home" /> Acceuil
              </Menu.Item>
              <Menu.Item key="signin">
                <Icon type="user" /> Inscription
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </header>
    )
  }
}