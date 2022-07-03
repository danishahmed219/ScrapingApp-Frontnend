import React from "react";
import { Container, Row } from 'react-bootstrap';
import Errors from '../assets/Error.png';

class Error extends React.Component {
    render() {
        return(
        <Container>
            <Row>
                <div class="col-lg-12">
                    <center><img src={Errors} className='w-25 mt-4' /></center>
                    <h4 className="mt-5">Opps, There is some issue with your provided URL</h4>
                </div>
            </Row>
        </Container>);
    }
}

export default Error;