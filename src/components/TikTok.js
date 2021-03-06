import {Container, Row } from "react-bootstrap";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faUser, faHeart, faVideo } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import DefaultImage from '../assets/user_default.jpeg';


class TikTok extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    static API_ENDPOINT_1 = 'http://localhost:8000';
    static API_ENDPOINT_2 = 'http://localhost:5000';

    constructor(props) {
        super(props);
        this.state = {
            Response: null
        }
    }

    componentDidMount = async () => {
        const tiktok_video_url = this.props.tiktok_video_url;
        let tiktok_desktop_url = null;
       
        try {
           
            if(tiktok_video_url.match("/t/")) {
                tiktok_desktop_url = await this.convert_MobileURL_To_DesktopURL(tiktok_video_url);
              
            } else {
                tiktok_desktop_url = tiktok_video_url;
            }

            const tiktok_video_info = await this.getTikTokVideoInfo(tiktok_desktop_url);
            this.setState({Response: tiktok_video_info});
        
        } catch(error) {
            console.log(error);
        }

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

    getTikTokVideoInfo = async (tiktok_desktop_url) => {
        const tiktok_video_id = /([0-9])+/.exec(tiktok_desktop_url);
        const tiktok_video_info = await axios.post(this.constructor.API_ENDPOINT_1, { social_media_type:'tiktok', tiktok_video_id: tiktok_video_id[0] });
        return tiktok_video_info;
    }

    convert_MobileURL_To_DesktopURL= async (tiktok_mobile_url) => {
        const mobile_api_endpoint = `${this.constructor.API_ENDPOINT_2}?url=${tiktok_mobile_url}`;
        const tiktok_desktop_url = await axios.get(mobile_api_endpoint);
        return tiktok_desktop_url.data.VideoURL;
    }
}

export default TikTok;