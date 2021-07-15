import CampaignList from "./CampaignList";

const CampaignsHome = ({ title, campaigns, config, setConfig }) => {

    return (
        <>
            <div className="main-header">
                <h2>{ title }</h2>
            </div>
            <div className="content">
                {config.campaign ? 
                    <div className="section" id="campaign-list">
                        {campaigns && <CampaignList campaigns={campaigns} />}
                    </div> :
                    <p>No Config</p>
                }
            </div>
        </>
    );
}
 
export default CampaignsHome;