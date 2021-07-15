import useFetch from '../useFetch';
import background from '../assets/adventure-bg.jpg';

const AdventuresList = ({ campaignid, title }) => {
    const { data: adventures, error, isPending } = useFetch(`http://192.168.1.200:8002/adventures?campaign=${campaignid}`);

    return (
        <div className="item-list">
            {isPending && <div className="no-data">Loading...</div>}
            {error && <div className="no-data">Could not fetch adventures. Please check your network connection.</div>}
            {title && <h3>{ title }</h3>}
            <br />
            {adventures && adventures.map((adventure) => (
               
                    <div className="item-preview" style={{ backgroundImage: `url(${background})`, color: "white", imageSize: "cover" }}>
                    <h3>{ adventure.name }</h3>
                    <p>{ adventure.description }</p>
                    </div>

            ))}
        </div>
    );
}
 
export default AdventuresList;