import { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import Nav from './Nav';
import Toolbar from './Toolbar';

const Spells = () => {
    const { settings } = useContext(AppContext);


    return (
        <>
            {settings.list.toolbarOpen && <Toolbar></Toolbar>}
            <Nav location="spells"></Nav>
            <main>
                <section>
                    <div className="one-column">
                        <h2>Spells List</h2>
                    </div>
                </section>
            </main>

        </>
    );
}

export default Spells