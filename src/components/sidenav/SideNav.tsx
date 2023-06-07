import { Link } from 'react-router-dom';
import Avatar from '../../assets/images/avatar.png';
import './SideNav.css';
import { useEffect, useState } from 'react';

const SideNav = ({ isMobile, closeSideNav }: { isMobile: any, closeSideNav: () => void }) => {
    const [currentRoute, setCurrentRoute] = useState("/");
    useEffect(() => {
        console.log(window.location.pathname);
        setCurrentRoute(window.location.pathname);
    }, []);
    return (
        <div className="sidebar">
            <div className='d-flex justify-content-center pb-4 px-4 avatar-wrapper'>
                <img className='avatar' src={Avatar} alt="logo" />
            </div>
            <ul style={{ marginTop: 100 }} className=" d-flex flex-column justify-content-center px-2">
                <Link onClick={() => {
                    setCurrentRoute("/");
                    if (isMobile) {
                        debugger;
                        closeSideNav();
                    }
                }} className={`nav-item text-center ${currentRoute === "/" ? "active" : ""}  py-2`} to="/">Home</Link>
                <Link onClick={() => {
                    setCurrentRoute("/about");

                    if (isMobile) {
                        debugger;
                        closeSideNav();
                    }
                }} className={`nav-item text-center ${currentRoute === "/about" ? "active" : ""}  py-2`} to="/about">About</Link>
                <Link onClick={() => {
                    setCurrentRoute("/experience");

                    if (isMobile) {
                        debugger;
                        closeSideNav();
                    }
                }} className={`nav-item text-center ${currentRoute === "/experience" ? "active" : ""}  py-2`} to="/experience">Experience</Link>
                <Link onClick={() => {
                    setCurrentRoute("/portfolio");

                    if (isMobile) {
                        debugger;
                        closeSideNav();
                    }
                }} className={`nav-item text-center ${currentRoute === "/portfolio" ? "active" : ""}  py-2`} to="/portfolio">Portfolio</Link>
            </ul>
        </div>
    )
}

export default SideNav;