import React, { Component } from 'react';
import './App.css'
import axios from 'axios';
import UserCard from "./components/UserCard"
import SelectUserForm from "./components/SelectUserForm"
import SearchUserForm from "./components/SearchUserForm"


export default class App extends Component {
  constructor() {
    super()

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
      <div className="App container">
        <div className="header">
          <img src = {require ("./img/lambdalogo.png")} alt="Lambda Logo"/>
          <span role="img">❤️'s</span>
          <img src = {require ("./img/githublogo.png")} alt="GitHub Logo" />
        </div>
      <div className="header" >
        <SelectUserForm 
        userName={this.state.UserName}
        handleChange={this.handleChange}
        />
        <SearchUserForm 
        onSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        value={this.state.value}
        />
      </div>


      {this.state.userName ? <UserCard 
      userInfo={this.state.userInfo} 
      userName={this.state.userName}
      followers={this.state.followers}
      />
      : <h3>Select or Search A Github User Name</h3>
      }

      </div>
    )
  }
};
