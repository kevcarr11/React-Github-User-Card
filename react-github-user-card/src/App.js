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
      userInfo: []
    }
  }

  componentDidMount() {
    this.getUserData()
  }

 componentDidUpdate(prevProps, prevState) {
  if(prevState.userName !== this.state.userName) {
    this.setState({
      userInfo: [],
    })
    this.getUserData()
  }
 }

 getUserData = () => {
   axios.get(`http://api.github.com/users/${this.state.userName}`)
    .then(res => {
      console.log(res.data)
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


  render() {
    return (
      <div className="App">
        <h1>Github UserCard</h1>

        <select value={this.state.userName} onChange={this.handleChange} >
          <option value="kevcarr11">Kevin</option>
          <option value="bigknell">Josh</option>
          <option value="tetondan">tetondan</option>
          <option value="dustinmyers">dustinmyers</option> 
          <option value="justsml">justsml</option> 
          <option value="luishrd">luishrd</option> 
        </select>
        <main>
          {/* <Card style={{ width: '20rem' }}> 
            <Card.Img variant="top" src={this.state.userInfo.avatar_url} className="img" />
            <Card.Body>
              <Card.Title>{this.state.userInfo.name}</Card.Title>
              <Card.Text>{this.state.userInfo.bio}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>My Followers: </ListGroupItem>
              <ListGroupItem>Following: </ListGroupItem>
              <ListGroupItem>Location: </ListGroupItem>
              <ListGroupItem>Number of Public Repos: </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href={this.state.userInfo.html_url}>View Profile</Card.Link>
            </Card.Body>
          </Card> */}
          <Card className="text-center">
            <Card.Header>{this.state.userInfo.name}</Card.Header>
            <Card.Body>
              <Card.Title>{<img src={this.state.userInfo.avatar_url} alt="github avatar" />}</Card.Title>
              <Card.Text>{this.state.userInfo.bio}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>My Followers: {this.state.userInfo.followers} </ListGroupItem>
              <ListGroupItem>Following: {this.state.userInfo.following} </ListGroupItem>
              <ListGroupItem>Location: {this.state.userInfo.location} </ListGroupItem>
              <ListGroupItem>Number of Public Repos: {this.state.userInfo.public_repos} </ListGroupItem>
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
