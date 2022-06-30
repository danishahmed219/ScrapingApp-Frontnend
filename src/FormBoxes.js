import { Button, Row, Container, Col, Form} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import Header from './header_banner';

const FormBoxes = () => {
        const navigate = useNavigate();
        const [url, setUrl] = useState("");
        
        return(
            <div>
               <Header className="mb-3" title="Pillar Social Post Reports" message="Get your social media stats" />
                <Container className="my-5">
               
                    <Row className="justify-content-center">
                        <Col lg={5}>
                            <Form.Control onChange={(e) => {setUrl(e.target.value)}} type="text" placeholder="Instagram or Tiktok Link" className="mb-3"></Form.Control>
                            <Button onClick={() => {navigate("/user", {state: {post_url: url}});}} variant="primary" as="Col">Get Post Details</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        );
}

export default FormBoxes;