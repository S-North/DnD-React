import Nav from "./Nav"
import Toolbar from "./Toolbar"
const Layout = ({children}) => {
    return (
        <>
        
        <Toolbar></Toolbar>
        <Nav></Nav>
        <main>{children}</main>
        </>
    )
}

export default Layout
