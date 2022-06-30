import { Button, Row, Container, Col, Form} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import Header from './header_banner';

const FormBoxes = () => {
        const navigate = useNavigate();
        const [url, setUrl] = useState("");
        
        return(
            <div>
               <Header className="mb-3" title="Social Media Stats" message="Get your social media stats" />
                <Container className="my-5">
               
                    <Row className="justify-content-center">
                        <Col lg={5}>
                            <Form.Control onChange={(e) => {setUrl(e.target.value)}} type="text" placeholder="Search By Video ID" className="mb-3"></Form.Control>
                            <Button onClick={() => {navigate("/user", {state: {post_url: url}});}} variant="primary" as="Col">Get View Count</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        );
}

export default FormBoxes;