import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import { Link } from 'react-router-dom';
import { FaWindowClose, FaEdit } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import BasicForm from "../forms/BasicForm";

const SimpleItemList = ({collection, listData, link, foreignKeys={}, add, action, type,  setModal}) => {
    // simple list with add, edit, delete. For very simple list objects with only "name", "description", "id"
    // collection is the name of the json-server collection used for updating e.g. "campaigns"
    // listData = obj with "name", "description", "id" for deleting/editing.
    // Link is the href of the to= of the Link element

    const { addItem, deleteItem, editItem } = useContext(AppContext);
    const [ show, setShow ] = useState({"campaignForm": false, "campaignEdit": false})
    const [ selected, setSelected ] = useState();


    const truncate = (string="", maxlength) => {
        if (string.length > maxlength) {
            return `${string.slice(0, maxlength)}...`
        } else {
            return string
        }
    }

    const listItemAdd = (item) => {
        addItem(collection, {...item, "id": uuidv4(), ...foreignKeys});
        setShow({...show, "campaignForm": false})
        return
    }

    const listItemEdit = (item) => {
        setSelected(item)
        setShow({...show, "campaignEdit": false})
        editItem(collection, item, item.id)
    }

    return (
        <>
        {show.campaignForm === false ? 
            <button className="green" onClick={() => {add()}}>New</button>
            : <button className="blue" onClick={() => {setShow({...show, "campaignForm": false})}}>Cancel</button>}

        {show.campaignForm && <BasicForm update={listItemAdd}></BasicForm>}
        {show.campaignEdit && <BasicForm update={listItemEdit} edit={{...selected, ...foreignKeys}}></BasicForm>}

        {show.campaignEdit === false && listData.map(listItem => (
            <div key={listItem.id} className="list-item">
                {link && <Link key={listItem.id} to={`/${link}/${listItem.id}`}>
                    <div className="link">
                            <h2>{listItem.name}</h2>
                            <em>{truncate(listItem.description, 50)}</em>
                    </div>
                </Link>}

                {action && <div key={listItem.id} onClick={() => {action({listItem})}}>
                    <div className="link">
                            <h2>{listItem.name}</h2>
                            <em>{truncate(listItem.description, 50)}</em>
                    </div>
                </div>}
                <div><FaWindowClose 
                    style={{"cursor": "pointer"}} 
                    color="red"
                    onClick={() => {deleteItem(collection, listItem.id)}} />
                <FaEdit 
                    style={{"cursor": "pointer"}} 
                    color="grey"
                    onClick={() => {add(listItem)}} />
                </div>
            </div>
        ))}
        </>
    );
}

export default SimpleItemList