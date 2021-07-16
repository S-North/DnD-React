import { Link } from "react-router-dom";
import background from '../assets/adventure-bg.jpg';

const CampaignList = ({ campaigns, config, setConfig }) => {
    const handleClick = (campaign) => {
        console.log(campaign);
    }
    // console.log(campaigns, config);

    return (
        <>
            <div className="widget">
                <Link to="/campaign-add"><button className="btn green float-right">New Campaign</button></Link>
                <h3>Campaigns</h3>
                <p>Please select a campaign below to access campaign notes, npcs, adventures and encounters.</p>
                <div className="item-list">
                    {campaigns.map((campaign) => (
                        <button className="link-button" key={campaign.id} onClick={() => handleClick({ campaign })}>
                            <div className="item-preview" style={{ backgroundImage: `url(${background})`, color: "white", imageSize: "cover" }}>
                                <h3>{ campaign.name }</h3>
                                <p>{  campaign.description }</p>
                            </div>
                        </button>

                    ))}
                </div>
            </div>
        </>
    );
}
 
export default CampaignList;