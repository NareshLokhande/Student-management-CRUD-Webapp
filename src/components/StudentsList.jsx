import { Button, Container, Table } from "react-bootstrap";
import { Header } from "./Header";
import { useState } from "react";

export function StudentsList() {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    return;
  };
  return (
    <Container>
      <Header
        title="List of students"
        description="Register the students here"
      />
      <Container>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Marks</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(() => {
              return (
                <tr>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.marks}</td>
                  <td>{s.phone}</td>
                  <td>
                    <Button variant="danger" onClick={()=>{
                      setShowModal(true)
                    }}>Delete</Button>&nbfc<Button variant="primary">Edit</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}
