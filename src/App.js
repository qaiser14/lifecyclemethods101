import React, { Component } from 'react'

class App extends Component {

  constructor(props){
    super(props)
    console.log("hello from constructor");

    this.state = {
      name:"hello"
    }
  }

  // state ={}

  componentDidMount(){
    console.log("hello from didmount");
  }

  // componentWillMount(){
  //   console.log("hello from will mount");
  // }


  

  render() {
    console.log("hello from render");

    console.log(this.state);


    return (
      <div>

      
      </div>
    )
  }
}

export default App
