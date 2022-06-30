import {Container, Row } from "react-bootstrap";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faUser, faHeart, faVideo } from '@fortawesome/free-solid-svg-icons';
import Image from 'react-bootstrap/Image'
import axios from "axios";
import DefaultImage from './assets/user_default.jpeg';


class TikTok extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            Response: null
        }
    }

    componentDidMount() {
        const video_id = this.props.postObj[0];

          axios.post('http://52.53.159.159:8000', {
            social_media_type:'tiktok',
            post_id: video_id   
        }).then((data) => {
            this.setState({Response: data});
            console.log(this.state.Response);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return(
        <div>
            <Container className="col-lg-6">
                <Row className="mt-4">                    
                        <center><img className='img-fluid rounded-circle my-3' alt="thumbnail" src={this.state.Response?this.state.Response.data.author.avatarMedium:DefaultImage} style={{maxWidth: '24rem'}} /></center>
                        <h4>{this.state.Response?this.state.Response.data.author.nickname:'Author Name'}</h4>
                        <p className="text-center">{this.state.Response?this.state.Response.data.author.signature:'Signature'}</p>
                    
                    <div className="col-lg-3">
                    <h5><FontAwesomeIcon icon={faUser} size="lg" className="mt-3" /> Comment</h5>
                    <h4>{this.state.Response?this.state.Response.data.stats.commentCount:100}</h4>
                    </div>

                    <div className="col-lg-3">
                    <h5 className="mt-4"><FontAwesomeIcon icon={faCamera} size="lg" /> Play Count</h5>
                    <h4>{this.state.Response?this.state.Response.data.stats.playCount:100}</h4>
                    </div>
                    
                    <div className="col-lg-3">
                    <h5 className="mt-4"><FontAwesomeIcon icon={faHeart} size="lg" /> Heart Count</h5>
                    <h4>{this.state.Response?this.state.Response.data.authorStats.heartCount:100}</h4>
                    </div>

                    <div className="col-lg-3">
                    <h5 className="mt-4"><FontAwesomeIcon icon={faVideo} size="lg" /> Video Count</h5>
                    <h4>{this.state.Response?this.state.Response.data.authorStats.videoCount:100}</h4>
                    </div>

                    
                    <video className="my-4" controls src={this.state.Response?this.state.Response.data.video.playAddr:"https://v16-webapp.tiktok.com/0aad73c048799f46d9c642fc2e07ce67/62b9018e/video/tos/maliva/tos-maliva-ve-0068c799-us/777943a795d642d5aa44bdf865457a71/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=316&bt=158&btag=80000&cs=0&ds=3&ft=eXd.6HKVMyq8ZKpu8we2N9c0yl7Gb&mime_type=video_mp4&qs=0&rc=OjlmaWVoN2doO2hlOmVoOEBpM3l0eDQ6ZnM4OzMzZzgzNEAuNS0vMDM0NjYxMzQzNWAtYSMtbzFncjRvaGVgLS1kLy9zcw%3D%3D&l=2022062619010601021713521114E8849B"}>
                    </video>
                    
                </Row>


            </Container>
        </div>);
    }
}

export default TikTok;