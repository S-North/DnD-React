import { Link } from 'react-router-dom';
import DiceRoller from './DiceRoller';
import CampaignList from './CampaignList';

const Home = ({ title, config, campaigns, setConfig }) => {
    return (
        <>
            <div className="main-header">
                <h1>{ title }</h1>
            </div>
            <div className="content">
                <p>Try rolling some dice!</p>
                <div className="section">
                    <DiceRoller />
                    {!config.campaign ?
                        <div className="section" id="campaign-list">
                            {campaigns && <CampaignList campaigns={ campaigns } config={ config } setConfig={ setConfig }/>}
                        </div> :
                        <p>No Config</p>
                    }
                </div>
                <div className="content">
                </div>
            </div>
        </>
    );
}
 
export default Home;