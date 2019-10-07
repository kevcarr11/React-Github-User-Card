import React, { Component } from 'react';
import './App.css'
import axios from 'axios';
import UserCard from "./components/UserCard"

export default class App extends Component {
  constructor() {
    super()

    // this.state = {
    //   userName: 'kevcarr11',
    //   userInfo: [],
    //   followers: []
      
    // }
    this.state = {
      userName: '',
      userInfo: [],
      followers: []
      
    }
  }

  componentDidMount() {
    this.getUserData()
    this.getUserFollowers()
  }

 componentDidUpdate(prevProps, prevState) {
  if(prevState.userName !== this.state.userName) {
    this.setState({
      userInfo: [],
      followers: []
      
    })
    this.getUserData()
    this.getUserFollowers()
   
  }
 }

 getUserData = () => {
   axios.get(`http://api.github.com/users/${this.state.userName}`)
    .then(res => {
      this.setState({
        userInfo: res.data
      })
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
    userName: ""
  })
}


 getUserFollowers = () => {
  axios.get(`http://api.github.com/users/${this.state.userName}/followers`)
   .then(res => {
     this.setState({
       followers: res.data
     })
   })
   .catch(err => console.log(err))
 }

 

  render() {
    return (
      <div className="App">
        <h1>Github UserCard</h1>

        {/* <select value={this.state.userName} onChange={this.handleChange} >
          <option value="kevcarr11">Kevin</option>
          <option value="bigknell">Josh</option>
          <option value="tetondan">Dan Frehner</option>
          <option value="dustinmyers">Dustin</option> 
          <option value="justsml">Dan Levy</option> 
          <option value="luishrd">Luis</option> 
          <option value="LaikaFusion">Andrew McLaughlin</option> 
          <option value="cladams0203">Chris Adams</option> 
          <option value="JacobWilliams90">Jacob Williams</option> 
        </select> */}

      <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
        <input
          type="search"
          value={this.state.value}
          placeholder="Search Github User name"
          // onChange={this.handleChange}
        />
      </form>

      {this.state.userName ? <UserCard 
      userInfo={this.state.userInfo} 
      userName={this.state.userName}
      followers={this.state.followers}
      />
      : <h3>Search for User Name</h3>

      }
      </div>
    )
  }
};
