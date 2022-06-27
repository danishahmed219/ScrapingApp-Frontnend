import { Button, Row, Container, Col, Form} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import {useState} from "react";

const FormBoxes = () => {
        const navigate = useNavigate();
        const [name, setName] = useState("");
        
        return(
            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col lg={5}>
                        <Form.Control onChange={(e) => {setName(e.target.value)}} type="text" placeholder="Search By Video ID" className="mb-3"></Form.Control>
                        <Button onClick={() => {navigate("/user", {state: {video_id: name}});}} variant="primary" as="Col">Get View Count</Button>
                    </Col>
                </Row>
            </Container>
        );
}

export default FormBoxes;