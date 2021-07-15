import { useLocation } from "react-router";
import CampaignList from "./CampaignList";

const Campaigns = (props) => {
    const location = useLocation();
    const campaigns = location.state.campaigns;
    console.log(campaigns)

    return (
        <>
            <div className="main-header">
                <h2>{ props.title }</h2>
            </div>
            <div className="content">
                <div className="section">
                    {campaigns && <CampaignList campaigns={campaigns} />}
                </div>
            </div>
        </>
    );
}
 
export default Campaigns;