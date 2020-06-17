import React from 'react';
import './App.css';
import List from './components/list'

export default class App extends React.Component {
  // * array of items 
  // * property that holds an empty string or value
  // * state -- setState??
  //list out the items
  // * onsubmit function
  // * onchange function
  //bind- connects function to it's values. allows function to hold onto values

  constructor(props){
    super(props)
  
  this.state = {

    term: '',
    items: []

  }

  }

  //// value takes what is stored in state. 
  onChange = (event) => {
    this.setState({term: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
    term:'',
    items: [...this.state.items, this.state.term]  //any time someones typing in something we're gonna push it into array

    })
  }


  render() {
  return (
    <div>
    <div className="header">
      <div className="wrapper">
        <img src="https://pbs.twimg.com/profile_images/829431121586880513/UGqLggLr.jpg"/>
        <p className="title">Road To Hire</p>
      </div>
   </div>
   <div className="app">
     <div className="app-wrapper">
      <p className="app-title">To Do List</p>
      <form className="App" onSubmit = {this.onSubmit}>
        <input value= {this.state.term} onChange = {this.onChange} placeholder="Type to add a task" type="text" id="box"/>
        <br/>

      </form>
      < br/>

      <List items = {this.state.items} />

     </div>
   </div>
   </div>
  );
  }
}