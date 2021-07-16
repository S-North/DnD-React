import background from '../assets/maxresdefault.jpg'

const Footer = () => {
    return (
        <>
        <div className="footer" style={{ backgroundImage: "url(" + background + ")"}}>
            <a target="_blank" rel="noreferrer" href="https://github.com/S-North/DnD-React">Find the code for this site on Github</a>
            <p>2021, using React and Json-Server</p>
        </div>
        </>
    );
}
 
export default Footer;