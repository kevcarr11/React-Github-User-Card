import React from 'react'
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"

function UserCard(props) {
  return (
    <div>
       <main>
          <Card className="text-center">
            <Card.Header>{props.userInfo.name}</Card.Header>
            <Card.Body>
              <Card.Title>{<img src={props.userInfo.avatar_url} alt="github avatar" /> }</Card.Title>
              <Card.Text>{props.userInfo.bio}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem><h4>My Followers:</h4>{props.followers.map((item, index) => (
                <p key={index}>{item.login}</p>
              ))}</ListGroupItem>
              <ListGroupItem><h4>Following:</h4>{props.userInfo.following} </ListGroupItem>
              <ListGroupItem><h4>Location:</h4> {props.userInfo.location} </ListGroupItem>
              <ListGroupItem><h4>Number of Public Repos:</h4>{props.userInfo.public_repos} </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href={props.userInfo.html_url}>View Profile</Card.Link>
            </Card.Body>
            <Card.Footer className="text-muted">{props.userInfo.type}</Card.Footer>
          </Card>

        </main>
    </div>
  )
}

export default UserCard
