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
      {/* <div class="card">
        <img src={this.state.userInfo.avatar_url} />
        <div>
          <h3>{}</h3>
          <p class="username">{users user name}</p>
          <p>Location: {users location}</p>
          <p>Profile:  
            <a href={address to users github page}>{address to users github page}</a>
          </p>
          <p>Followers: {users followers count}</p>
          <p>Following: {users following count}</p>
          <p>Bio: {users bio}</p>
        </div>
      </div> */}
        <img src={this.state.userInfo.avatar_url} alt="github user" />
      </div>
       
      </>
    )
  }
};
