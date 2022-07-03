import { Button, Row, Container, Col, Form} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import {useState} from "react";

const URLSearchForm = () => {
        const navigate = useNavigate();
        const [url, setUrl] = useState("");
        
        return(
            <div>
                <Container className="my-5">
               
                    <Row className="justify-content-center">
                        <Col lg={5}>
                            <Form.Control onChange={(e) => {setUrl(e.target.value)}} type="text" placeholder="Instagram or Tiktok Link" className="mb-3"></Form.Control>
                            <Button onClick={() => {navigate("/user", {state: {social_post_url: url}});}} variant="primary" as="Col">Get Post Details</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        );
}

export default URLSearchForm;