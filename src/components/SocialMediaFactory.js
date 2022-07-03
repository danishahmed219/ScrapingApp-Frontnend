import { useLocation } from 'react-router-dom';
import TikTok from './TikTok';
import Instagram from './Instagram.js';
import Error from './Error.js';
import HeaderApp from './HeaderApp';

const SocialMediaFactory = () => {
    const {state} = useLocation();
    let hostname = null;
    let url = state.social_post_url;

    if(url.match("instagram") || (url.match("tiktok"))) {
        hostname = new URL(url).hostname.split('.')[1]
    }

    if(hostname === "tiktok") {      
    
        return (
            <div>
                <HeaderApp message="Get Your Tiktok Stats" title="Tiktok Stats"/>
                <TikTok tiktok_video_url={state.social_post_url} />
            </div>
        );

    } else if(hostname === "instagram") {
    
        return (
            <div>
                <HeaderApp message="Get Your Instagram Post Stats" title="Instagram Stats" />
                <Instagram instagram_post_url={state.social_post_url} />
            </div>
        );
    
    } else if(!url.match("/t/")) {
        return(
            <Error/>
        )
    
    }
}

export default SocialMediaFactory;
