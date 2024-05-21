import { Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useState } from "react";
import { saveStudent } from "../services/StudentService";

export function StudentRegistrationForm() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    phone: "",
    marks: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    saveStudent(formData)
      .then((response) => {
        alert(response.data.message);
      })
      .catch(error);
    console.log(error);
  };

  return (
    <Container>
      <Header
        title="Restistration of students"
        description="Register the students here"
      />
      <Container>
        <Form>
          <Row>
            <Col></Col>
          </Row>
        </Form>
      </Container>
    </Container>
  );
}
