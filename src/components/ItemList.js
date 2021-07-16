import { Link } from "react-router-dom";
import background from '../assets/adventure-bg.jpg';

const ItemList = ({ title, description, buttonText, route, items, config, setConfig }) => {
    return (
        <>
            <div className="widget">
                <button className="btn green float-right">{ buttonText }</button>
                <h3>{ title }</h3>
                <p>{ description }</p>
                <div className="item-list">
                    {items ? items.map((item) => (
                        <Link   to={{
                                pathname: route,
                                state: { item, config }
                                }} 
                                key={item.id}>

                            <div className="item-preview" style={{ backgroundImage: `url(${background})`, color: "white", imageSize: "cover" }}>
                                <h3>{ item.name }</h3>
                                <p>{  item.description }</p>
                            </div>

                        </Link>
                    ))
                : <p>No notes to display</p>}
                </div>
            </div>
        </>
    );
}
 
export default ItemList;