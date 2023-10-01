import { Hidden } from "@mui/material"
import React from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Course(props) {
  return (
    <div>
      <Link to={`/courses/${props.id}`} className="nav-link">
        <Card style={{ width: "18rem" }} className="m-3">
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text style={{height:'70px',overflow:'hidden'}}>
             {props.description}
            </Card.Text>
            <div className="row w-100 justify-content-between border-top m-0" style={{direction:"rtl"}}>
                 <div className="col-5">{props.price}تومان</div>
                 <div className="col-4">114 نفر</div>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  )
}
