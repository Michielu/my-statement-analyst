import React, {
  Component
} from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Layout, Menu, Icon, Card } from 'antd';
import Onboarding from '../Onboarding/index'
import routes from '../../config/routes.jsx'
import './App.css';


const { Sider, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signIn: false,
      current: '1'
    }

    this.toggleSignIn = this.toggleSignIn.bind(this);
  }

  toggleSignIn = () => {
    this.setState((prevState) => {
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

  menuItems() {
    return (
      <Menu>
        {routes.map((route, index) => (
          <Menu.Item key={index}>
            <Link to={route.path}>
              <Icon type={route.glyphicon} />
              <span> {route.text} </span>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    )
  }

  //With redux: have it show which page is loading and update it
  onMenuCLick = (e) => {
    console.log("Click: ", e)
    this.setState({
      current: e.key,
    });
  }

  render() {
    //If user has signed in
    if (!this.state.signIn) {
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
                  <Menu
                    theme="light"
                    mode="inline"
                    // defaultSelectedKeys={['1']}
                    selectedKeys={[this.state.current]}
                    onClick={this.onMenuCLick}
                  >
                    {this.menuItems()}
                  </Menu>
                  <Button onClick={this.toggleSignIn}> Log out</Button>
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