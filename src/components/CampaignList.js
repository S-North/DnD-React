import { Link } from "react-router-dom";
import background from '../assets/adventure-bg.jpg';

const CampaignList = ({ campaigns, config, setConfig }) => {
    const handleClick = (campaign) => {
        console.log(campaign);
    }
    // console.log(campaigns, config);

    return (
        <div className="item-list">
            {campaigns.map((campaign) => (
                <button className="link-button" key={campaign.id} onClick={() => handleClick({ campaign })}>
                    <div className="item-preview" style={{ backgroundImage: `url(${background})`, color: "white", imageSize: "cover" }}>
                        <h3>{ campaign.name }</h3>
                        <p>{  campaign.description }</p>
                    </div>
                </button>

            ))}
            <Link to="/campaign-add"><button className="btn green">New Campaign</button></Link>
        </div>
    );
}
 
export default CampaignList;