import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faUser } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import axios from "axios";
import '../assets/User.jpg';
import DefaultImage from '../assets/user_default.jpeg';

class Instagram extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    static API_ENDPOINT = 'http://localhost:8000';

    constructor(props) {
        super(props);
        this.state = {
            api_response: null
        }
    }

    componentDidMount = async () => {

        const instagram_post_url = this.props.instagram_post_url;

        try {
            const insta_response = await axios.post(this.constructor.API_ENDPOINT, {
                social_media_type: 'instagram',
                insta_post_url: instagram_post_url
            });
    
            console.log(insta_response);

            this.setState({ api_response: insta_response });
        
        } catch(error) {
            console.log(error);
        }
        
    }

    render() {

        const author_profile_url = this.state.api_response ? `https://circumvent-cors.herokuapp.com/${this.state.api_response.data["author_profile_url"]}` : DefaultImage;
        const author_fullName = this.state.api_response ? this.state.api_response.data['author_fullName'] : 'Author Name'

        const post_thumbnail_url = this.state.api_response ? `https://circumvent-cors.herokuapp.com/${this.state.api_response.data["post_thumbnail_url"]}` : DefaultImage;
        const post_comment_count = this.state.api_response ? this.state.api_response.data['post_comment_count'] : 0;
        const post_likes_count = this.state.api_response ? this.state.api_response.data['post_likes_count'] : 0;

        return (
            <div>
                <Container className="col-lg-6">
                    <Row className="mt-4">

                        <center><img crossOrigin="anonymous" className='img-fluid rounded-circle my-3' alt="thumbnail" src={author_profile_url} style={{ maxWidth: '24rem' }} /></center>
                        <h4>{author_fullName}</h4>


                        <div className="col-lg-6">
                            <h5><FontAwesomeIcon icon={faUser} size="lg" className="mt-3" /> Comments</h5>
                            <h4>{post_comment_count}</h4>
                        </div>

                        <div className="col-lg-6">
                            <h5 className="mt-4"><FontAwesomeIcon icon={faCamera} size="lg" /> Likes Count</h5>
                            <h4>{post_likes_count}</h4>
                        </div>

                        <center>
                            <h2>Your Post</h2>
                            <img crossOrigin="anonymous" className='img-fluid my-3' src={post_thumbnail_url} style={{ maxWidth: '400rem' }} /></center>

                    </Row>

                </Container>
            </div>);
    }
}

export default Instagram;