import React, {
    Component
  } from 'react';

import {
  getAll,
  getTransID,
  postTransaction
} from '../../couriers/index'
    
  
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            transactions:  getAll()
        }
    }

    componentDidMount(){
        const allTransaction =  getAll();
        this.setState((state, props) => {
            return {transactions: allTransaction.data};
          });  
    }

    render() {
      return (< div >
        < h2 > Home </h2>
       <p>Transactions are: </p>
       {console.log(this.state.transactions)}
       {this.state.transactions}
      </div>
      );
    }
  }
  
  export default Home;