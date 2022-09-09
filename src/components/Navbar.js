import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react'
import Sidebar from './Sidebar'
import { faHome, faList, faCog } from '@fortawesome/free-solid-svg-icons';


const Navbar= () =>{
const [showSidebar, setShowSidebar] = useState(false)

const location = useLocation()

const links = [
    {
        name: "Home",
        path: "/",
        icon: faHome
    },
    {
        name: "Recipe",
        path: "/recipes",
        icon: faList
    },
    {
        name: "Settings",
        path: "/settings",
        icon: faCog
    }
]

function closeSidebar(){
    setShowSidebar(false)
}
    return(
       <>
         <div className='navbar container'>
    <Link to='/' className='logo'> F<span>oo</span>diestHub</Link>

    <div className='nav-links'>
    {links.map(link => (
        <Link to={link.path} key={link.name} className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"}> {link.name} </Link>
    ))    };
        {/* <a href='#' className='active'> Home </a>
        <a href='#'> Recipe </a>
        <a href='#'> Setting </a> */}
    </div>

    <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
    <div className='bar'> </div>
    <div className='bar'> </div>
    <div className='bar'> </div>
   
     </div>
        </div>

        {showSidebar && <Sidebar close={closeSidebar} links={links} />}
        
       </>
    )
} 

export default Navbar