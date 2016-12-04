import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Row, Col } from 'antd';
import { Header } from '../../components';

import style from './style.scss';

export default class App extends React.Component{
  render(){
    console.log(style);

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