
import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/home/Home'
import SideNav from './components/sidenav/SideNav'
import { useMediaQuery } from 'react-responsive'
import { Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import { useLocation } from 'react-router-dom';
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'



function App() {

  const location = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' })
  const [sideNavOpened, setSideNavOpened] = useState<Boolean>(false);
  const [sideBarWrapperStyle, setSideBarWrapperStyle] = useState<any>(
    { position: "fixed", minWidth: 280, left: -279, transition: "all 250ms", zIndex: 1 }
  );



  useEffect(() => {
    debugger;
    if (isMobile) {
      setSideNavOpened(false);
    }
  }, [])

  useEffect(() => {
    console.log("Location changed");
    debugger;
    if (isMobile) {
      setSideNavOpened(false);
    }
  }, [location])

  useEffect(() => {
    debugger;
    if (sideNavOpened) {
      setSideBarWrapperStyle({ position: "fixed", minWidth: 280, left: 0, transition: "all 250ms", zIndex: 1 });
    } else {
      setSideBarWrapperStyle({ position: "fixed", minWidth: 280, left: -279, transition: "all 250ms", zIndex: 1 });
    }
  }, [sideNavOpened])
  return (
    <div style={{ height: "100vh", zIndex: 1 }} className="d-flex">
      {isMobile && <div style={sideBarWrapperStyle} className="sidebar-wrapper">
        <SideNav isMobile={isMobile} closeSideNav={() => {
          debugger;
          setSideNavOpened(false);
        }} />
        {isMobile && <div onClick={() => {
          if (sideNavOpened) { setSideNavOpened(false); } else {
            setSideNavOpened(true);
          }

        }} className="d-flex justify-content-center align-items-center"
          style={{ position: "absolute", left: 280, top: 30, color: "white", width: 60, height: 60, fontSize: 25, borderRight: "1px solid #2E344E", borderTop: "1px solid #2E344E", borderBottom: "1px solid #2E344E", cursor: "pointer", transition: "all 250ms", background: "#191D2A", zIndex: 1 }}>
          {!sideNavOpened ? <i className="fa  fa-bars"></i> : <i className="fa  fa-arrow-left"></i>}</div>}
      </div>}

      {!isMobile && <div style={{ minWidth: 280, position: "relative", transition: "all 250ms", zIndex: 1 }} className="sidebar-wrapper">
        <SideNav isMobile={isMobile} closeSideNav={() => {
        }} />
      </div>}
      <div style={{ zIndex: 0, overflowX: "hidden" }} className="w-100 h-100">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
