import React, { Component } from 'react';
import './App.css'
import axios from 'axios';
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      userName: 'kevcarr11',
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

        <select value={this.state.userName} onChange={this.handleChange} >
          <option value="kevcarr11">Kevin</option>
          <option value="bigknell">Josh</option>
          <option value="tetondan">Dan Frehner</option>
          <option value="dustinmyers">Dustin</option> 
          <option value="justsml">Dan Levy</option> 
          <option value="luishrd">Luis</option> 
          <option value="LaikaFusion">Andrew McLaughlin</option> 
          <option value="cladams0203">Chris Adams</option> 
          <option value="JacobWilliams90">Jacob Williams</option> 
        </select>

        <main>
          <Card className="text-center">
            <Card.Header>{this.state.userInfo.name}</Card.Header>
            <Card.Body>
              <Card.Title>{<img src={this.state.userInfo.avatar_url} alt="github avatar" />}</Card.Title>
              <Card.Text>{this.state.userInfo.bio}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem><h4>My Followers:</h4>{this.state.followers.map((item, index) => (
                <p key={index}>{item.login}</p>
              ))}</ListGroupItem>
              <ListGroupItem><h4>Following:</h4>{this.state.userInfo.following} </ListGroupItem>
              <ListGroupItem><h4>Location:</h4> {this.state.userInfo.location} </ListGroupItem>
              <ListGroupItem><h4>Number of Public Repos:</h4>{this.state.userInfo.public_repos} </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href={this.state.userInfo.html_url}>View Profile</Card.Link>
            </Card.Body>
            <Card.Footer className="text-muted">{this.state.userInfo.type}</Card.Footer>
          </Card>

        </main>
      </div>
    )
  }
};
