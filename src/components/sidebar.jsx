import React, { useState, useEffect, useRef } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current && 
      !sidebarRef.current.contains(event.target) &&
      !hamburgerRef.current.contains(event.target)
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div>
      <div 
        className="hamburger-menu" 
        onClick={toggleSidebar} 
        ref={hamburgerRef}>
        &#9776; 
      </div>

      <aside 
        ref={sidebarRef}
        id="colorlib-aside" 
        className={`border js-fullheight sidebar ${isSidebarOpen ? 'show' : ''}`} 
        style={{ overflow: 'hidden' }}>
        <div className="text-center">
          <div className="author-img" style={{ backgroundImage: 'url(images/Composite_Headshot.jpg)' }} />
          <h1 id="colorlib-logo"><a href="">Sidarth Kulkarni</a></h1>
          <span className="email">
            <i className="icon-mail"></i> 
            <a href="mailto:someone@example.com" className="highlight-underline">ksidarth16@gmail.com</a>
          </span>
        </div>
        <nav id="colorlib-main-menu" role="navigation" className="navbar">
          <div id="navbar" className="collapse">
            <ul>
              <li><a href="/#about" data-nav-section="about">About</a></li>
              <li><a href="/#timeline" data-nav-section="timeline">Timeline</a></li>
              <li><a href="#projects" data-nav-section="projects" className="disabled">Projects (Coming Soon!)</a></li>
              <li><a href="/blog" data-nav-section="blog" className="disabled">Blog (Coming Soon!)</a></li> 
            </ul>
          </div>
        </nav>
        <nav id="colorlib-main-menu">
          <ul>
            <li><a href="https://www.linkedin.com/in/ksidarth/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
            <li><a href="https://github.com/ksidarth" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
          </ul>
        </nav>
        <div className="colorlib-footer">
          <p><small>
            Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
            Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
          </small></p>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
