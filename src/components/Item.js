import { Link } from "react-router-dom";

const Item = ({ itemStyle="item-block", item, route, campaignId, adventureId, background }) => {
    const truncate = (string) => {
        if (string && string.length > 120) {
            return string.substring(0, 116) + " ..."
        }
        return string
    }

    if (itemStyle === "item-compact") {
        background = "";
    }
    
    return (
        <>
            <Link key={ item.id } to={{
                pathname: route,
                state: { item, campaignId, adventureId }
                }} >
                {(itemStyle === "item-block") ?
                <div className={itemStyle} style={{ backgroundImage: `url(${background})`, color: "white", imageSize: "cover" }}>
                    <h3>{ item.name }</h3>
                    {item.cr && <p>CR: { item.cr }</p>}
                    {item.type && <p>Type: { item.type }</p>}
                    {(itemStyle === "item-block") && <p>{ truncate(item.description) }</p>}
                </div>
                :
                <div className={itemStyle}>
                    <h3 style={{ color:"black"}}><strong>{ item.name }.</strong> <em>{item.type} CR: {item.cr}</em></h3>
                </div>
                }
            </Link>
        </>
    );
}
 
export default Item;