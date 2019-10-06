import React, { Component } from 'react';
import './App'
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      userName: 'kevcarr11',
      userInfo: []
    }
  }

  componentDidMount() {
    this.getUserData()
  }

 componentDidUpdate(prevProps, prevState) {
  if(prevState.userName !== this.state.userName) {
    this.setState({
      userInfo: []
    })
    this.getUserData()
  }
 }

 getUserData = () => {
   axios.get(`http://api.github.com/users/${this.state.userName}`)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
 }

 handleChange = (e) => {
   this.setState({
     userName: e.target.value
   })
 }

 handleSubmit = (e) => {
   e.preventDefault()
   this.setState({
     value: ""
   })
 }

  render() {
    return (
      <>
        <h1>Github UserCard</h1>

        <form onSubmit={this.handleSubmit} >
          <input
           type="text"
           value={this.state.userName}
           onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
       
      <div>

      </div>
       
      </>
    )
  }
};
