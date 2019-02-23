import React, {
  Component
} from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon, Card } from 'antd';
import Onboarding from '../Onboarding'
import routes from '../../config/routes'
import './App.css';


const { Sider, Content } = Layout;

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      signIn: false
    }

    this.toggleSignIn = this.toggleSignIn.bind(this);
  }

   toggleSignIn = ()=>{
     this.setState((prevState)=>{
       return {
         signIn: !prevState.signIn
       }
     })
   } 

  routePaths() {
    return (
      <div style={{ flex: 1, padding: "10px" }}>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} render={route.main} />
        ))}
      </div>
    );
  }

  render() {
    //If user has signed in
    if(!this.state.signIn){
      return (
        <div>
          <Onboarding toggleSignIn={this.toggleSignIn} />
        </div>
      )
    }
    else {
      return (
        <div className="App">
        <Router>
          <div>
            <Layout style={{ minHeight: '100vh' }}>
              <Sider collapsible theme="light" >
                <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                  <Menu.Item key="1">
                    <Link to="/">
                      <Icon type="home" />
                      <span> Home </span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/t/a">
                      <Icon type="allTrans" />
                      <span> All Transaction </span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/a">
                      <Icon type="addTrans" />
                      <span> Add Transaction </span>
                    </Link>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Content> <Card> {this.routePaths()} </Card> </Content>
            </Layout>
          </div>
        </Router>
      </div>
      );
    }
    }
    
}

export default App;