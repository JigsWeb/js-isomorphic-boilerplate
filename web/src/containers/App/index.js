import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Row, Col } from 'antd';
import { Header } from '../../components';

const style = {
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

class App extends React.Component{
  render(){
    return (
      <div className="app">

        <Header />

        <Row>
          <div className="main-wrapper" style={style.mainWrapper}>
            {this.props.children}
          </div>
        </Row>
      </div>
    )
  }
}

export default connect(
  () => ({}),
  (dispatch) => ({
    push: url => {
      console.log("Sa passe", url);
      dispatch(push(url));
    }
  })
)(App)