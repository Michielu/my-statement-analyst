import React, {
  Component
} from 'react';



import IndividualTrans from './IndividualTrans.jsx';
import AllTransactions from './AllTransactions.jsx';

class AllTrans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      allTrans: true,
      individualTrans: null
    }
    this.toggleAllTrans=  this.toggleAllTrans.bind(this);
  }



  toggleAllTrans(trans = null){
    this.setState((state) =>{
      return { 
        allTrans: !state.allTrans,
        individualTrans: trans
      }
    })
  }

  render() {

    let pageDisplay 

    if(this.state.allTrans){
      pageDisplay = (
          <AllTransactions toggleAllTrans={this.toggleAllTrans}/>
      )
    } else {
      pageDisplay= (<IndividualTrans transactions={this.state.individualTrans} goBack={()=> this.toggleAllTrans}></IndividualTrans>)
    }

    return (
      pageDisplay
    );
  }
}

export default AllTrans;