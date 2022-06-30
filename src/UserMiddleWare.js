import { useLocation } from 'react-router-dom';
import TikTok from './TikTok';
import Instagram from './Instagram.js';
import Error from './Error.js';
import Header from './header_banner';

const UserMiddleWare = () => {
    const {state} = useLocation();
    let hostname = null;


    if(state.post_url.match("instagram") || state.post_url.match("tiktok")) {
        hostname = new URL(state.post_url).hostname.split('.')[1]
    }

    if(hostname === "tiktok") {      
        const video_id = /([0-9])+/.exec(state.post_url);
        console.log(video_id);

        return (
            <div>
                <Header message="Get Your Tiktok Stats" title="Tiktok Stats"/>
                <TikTok postObj={video_id} />
            </div>
        );

    } else if(hostname === "instagram") {
        return (
            <div>
                <Header message="Get Your Instagram Post Stats" title="Instagram Stats" />
                <Instagram postObj={state.post_url} />
            </div>
        );
    } else {
        return(
            <Error/>
        )
    }
}

export default UserMiddleWare;
