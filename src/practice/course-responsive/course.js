import React, { Component } from 'react'
import {Card,Button,Image} from 'react-bootstrap'
export default class Course extends Component {
  render() {
    return (
      <div>
      <Card style={{ width: '18rem' }}>
      <Image src={this.props.img} thumbnail/>
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">see course</Button>
      </Card.Body>
    </Card>
      </div>
    )
  }
}
