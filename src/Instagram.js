import {Container, Row } from "react-bootstrap";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faUser, faHeart, faVideo } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import './assets/User.jpg';
import DefaultImage from './assets/user_default.jpeg';

class Instagram extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            Response: null
        }
    }

    componentDidMount() {
        const video_id = this.props.postObj;
      
          axios.post('http://52.53.164.183:8000', {
            social_media_type:'instragram',
            post_id: video_id
        }).then((data) => {
            this.setState({Response: data});
            console.log(this.state.Response);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {

        const profile_url = this.state.Response?`https://circumvent-cors.herokuapp.com/${this.state.Response.data["Profile URL"]}`:DefaultImage;
        const thumbnail_url = this.state.Response?`https://circumvent-cors.herokuapp.com/${this.state.Response.data["Thumbnail URL"]}`:DefaultImage;

        return(
        <div>
            <Container className="col-lg-6">
                <Row className="mt-4">                    

                    <center><img crossOrigin="anonymous" className='img-fluid rounded-circle my-3' alt="thumbnail" src={profile_url} style={{maxWidth: '24rem'}} /></center>
                    <h4>{this.state.Response?this.state.Response.data['FullName:']:'Author Name'}</h4>
                        
                    
                    <div className="col-lg-6">
                    <h5><FontAwesomeIcon icon={faUser} size="lg" className="mt-3" /> Comments</h5>
                    <h4>{this.state.Response?this.state.Response.data['Comment Count']:100}</h4>
                    </div>

                    <div className="col-lg-6">
                    <h5 className="mt-4"><FontAwesomeIcon icon={faCamera} size="lg" /> Likes Count</h5>
                    <h4>{this.state.Response?this.state.Response.data['Likes Count']:100}</h4>
                    </div>

                    <center>
                        <h2>Your Post</h2>
                        <img crossOrigin="anonymous" className='img-fluid my-3' src={thumbnail_url} style={{maxWidth: '400rem'}} /></center>

                </Row>


            </Container>
        </div>);
    }
}

export default Instagram;