import { func, object } from "prop-types"
import React, { useEffect, useState } from "react"
import { Table, Modal, Button, Form } from "react-bootstrap"
import { AiFillEdit } from "react-icons/ai"
import { AiFillDelete } from "react-icons/ai"
export default function Users() {
  const [users, setUsers] = useState([])
  const [usersId, setUsersId] = useState("")
  const [getUser, setGetUser] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  const [firstNameData, setFirstNameData] = useState("")
  const [lastNameData, setLastNameData] = useState("")
  const [emailData, setEmailData] = useState("")

  useEffect(() => {
    fetch("https://react-test-1-dc233-default-rtdb.firebaseio.com/users.json")
      .then((res) => res.json())
      .then((data) => {
        setUsers(Object.entries(data))
      })
  }, [getUser])

  useEffect(()=>{
    let mainInfoUser = users.find(user=>usersId== user[0])
    if (mainInfoUser) {
      setFirstNameData(mainInfoUser[1].firstNameData)
      setLastNameData(mainInfoUser[1].lastNameData)
      setEmailData(mainInfoUser[1].emailData)
    }
  },[usersId])

  async function removeHandler() {
    console.log(usersId)
    await fetch(
      `https://react-test-1-dc233-default-rtdb.firebaseio.com/users/${usersId}.json`,
      {
        method: "DELETE",
      }
    ).then((res) => console.log(res))
    setShowDeleteModal(false)
    setGetUser((prev) => !prev)
  }

  async function editHandler() {
    let userNewInfos = {
      firstNameData,
      lastNameData,
      emailData,
    }

    console.log(userNewInfos);
   
    await fetch(
      `https://react-test-1-dc233-default-rtdb.firebaseio.com/users/${usersId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(userNewInfos),
      }
    ).then((res) => console.log(res))
    setShowEditModal(false)
    setGetUser((prev) => !prev)
  }
  return (
    <>
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{user[1].firstNameData}</td>
              <td>{user[1].lastNameData}</td>
              <td>{user[1].emailData}</td>
              <td className="d-flex justify-content-between px-3">
                <AiFillDelete
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowDeleteModal(true)
                    setUsersId(user[0])
                  }}
                />
                <AiFillEdit
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowEditModal(true)
                    setUsersId(user[0])
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

{/* modal delete */}
      <Modal
      show={showDeleteModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Confirm
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>delete Modal</h4>
        <p>
          are you sure for delete this user?
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => setShowDeleteModal(false)}>Cancle</Button>
        <Button onClick={removeHandler}>Delete</Button>
      </Modal.Footer>
    </Modal>


{/* edit modal */}
      <Modal
        show={showEditModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>FirstName:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter FirstName"
                onChange={(e) => setFirstNameData(e.target.value)}
                value={firstNameData}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>LastName:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter LastName"
                onChange={(e) => setLastNameData(e.target.value)}
                value={lastNameData}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmailData(e.target.value)}
                value={emailData}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowEditModal(false)}>Cancel</Button>
          <Button onClick={editHandler}>Edit</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
