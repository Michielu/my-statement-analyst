import React, {
  Component
} from 'react';
import axios from "axios";

import './App.css';


class App extends Component {

  postNote(){
    axios.post("http://localhost:8000/notes", {
      "text": "this is a body3",
      "title": "this is a title3",    
    }).catch((e)=>console.log(e));
  }

  getNote(){
    axios.get("http://localhost:8000/notes/5c492ce6023ed5218f8f5224", {   
    }).then((res)=>{
      console.log(res)
    }).catch((e)=>console.log(e));
  }
  render() {
    return (< div className="App" >
      < h2 > Application </h2>
      <button onClick={()=>{this.getNote()}}> Post button</button>
    </div>
    );
  }
}

export default App;