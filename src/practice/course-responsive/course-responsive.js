import React, { Component } from "react"
import Course from "./course"
import { Row, Col } from "react-bootstrap"
export default class CourseResponsive extends Component {
  state = {
    courses: [
      { id: 1, title: "Album 1", price: 5, img: "imgs-shop/Album 1.png" },
      { id: 2, title: "Album 2", price: 15, img: "imgs-shop/Album 2.png" },
      { id: 3, title: "Album 3", price: 20, img: "imgs-shop/Album 3.png" },
      { id: 4, title: "Album 4", price: 100, img: "imgs-shop/Album 4.png" },
      { id: 5, title: "Coffee", price: 5, img: "imgs-shop/Cofee.png" },
      { id: 6, title: "Shirt", price: 50, img: "imgs-shop/Shirt.png" },
    ],
  }
  render() {
    return (
      <Row>
        {this.state.courses.map((course) => (
          <Col xs={12} sm={6} md={4}>
            <Course {...course} />
          </Col>
        ))}
      </Row>
    )
  }
}
