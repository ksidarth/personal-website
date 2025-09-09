import React, { useState, useEffect, useRef } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    }
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSidebarOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Modern Mobile Menu Button */}
      <button 
        className={`modern-mobile-menu ${isScrolled ? 'scrolled' : ''}`}
        onClick={toggleSidebar} 
        ref={hamburgerRef}
        aria-label="Toggle navigation menu"
      >
        <span className={`hamburger-line ${isSidebarOpen ? 'active' : ''}`}></span>
        <span className={`hamburger-line ${isSidebarOpen ? 'active' : ''}`}></span>
        <span className={`hamburger-line ${isSidebarOpen ? 'active' : ''}`}></span>
      </button>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Modern Sidebar */}
      <aside 
        ref={sidebarRef}
        className={`modern-sidebar ${isSidebarOpen ? 'open' : ''}`}
      >
        <div className="sidebar-content">
          {/* Profile Section */}
          <div className="profile-section">
            <div className="profile-image">
              <img 
                src="images/Composite_Headshot.jpg" 
                alt="Sidarth Kulkarni"
                loading="lazy"
              />
            </div>
            <h1 className="profile-name">Sidarth Kulkarni</h1>
            <p className="profile-title">CS + FinTech @ Northeastern</p>
            <a 
              href="mailto:ksidarth16@gmail.com" 
              className="profile-email"
            >
              ksidarth16@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <nav className="sidebar-navigation">
            <ul>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="nav-link"
                >
                  <span className="nav-icon">👤</span>
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('timeline')}
                  className="nav-link"
                >
                  <span className="nav-icon">📅</span>
                  Timeline
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="nav-link disabled"
                  disabled
                >
                  <span className="nav-icon">💼</span>
                  Projects
                  <span className="coming-soon">Soon</span>
                </button>
              </li>
              <li>
                <a 
                  href="/blog" 
                  className="nav-link disabled"
                >
                  <span className="nav-icon">📝</span>
                  Blog
                  <span className="coming-soon">Soon</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Social Links */}
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/ksidarth/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <i className="icon-linkedin2" />
            </a>
            <a 
              href="https://github.com/ksidarth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <i className="icon-github" />
            </a>
          </div>

          {/* Footer */}
          <div className="sidebar-footer">
            <p>
              Made with <span className="heart">❤️</span> and <span className="coffee">☕</span>
            </p>
          </div>
        </div>
      </aside>

      <style jsx>{`
        .modern-mobile-menu {
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 1001;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 12px;
          padding: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .modern-mobile-menu.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .hamburger-line {
          display: block;
          width: 24px;
          height: 2px;
          background: #333;
          margin: 4px 0;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .hamburger-line.active:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger-line.active:nth-child(2) {
          opacity: 0;
        }

        .hamburger-line.active:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 998;
          backdrop-filter: blur(4px);
        }

        .modern-sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: 300px;
          height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          z-index: 999;
          transform: translateX(-100%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
          box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);
        }

        .modern-sidebar.open {
          transform: translateX(0);
        }

        .sidebar-content {
          padding: 2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .profile-section {
          text-align: center;
          margin-bottom: 2rem;
        }

        .profile-image {
          width: 120px;
          height: 120px;
          margin: 0 auto 1rem;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-name {
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 0.5rem;
          font-family: 'Inter', sans-serif;
        }

        .profile-title {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          margin: 0 0 1rem;
        }

        .profile-email {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 0.9rem;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .profile-email:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .sidebar-navigation {
          flex: 1;
          margin-bottom: 2rem;
        }

        .sidebar-navigation ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sidebar-navigation li {
          margin-bottom: 0.5rem;
        }

        .nav-link {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 12px 16px;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;
          font-size: 1rem;
          cursor: pointer;
          position: relative;
        }

        .nav-link:hover:not(.disabled) {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(4px);
        }

        .nav-link.disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .nav-icon {
          margin-right: 12px;
          font-size: 1.2rem;
        }

        .coming-soon {
          margin-left: auto;
          font-size: 0.7rem;
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 10px;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .sidebar-footer {
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.8rem;
        }

        .heart, .coffee {
          margin: 0 2px;
        }

        @media (min-width: 768px) {
          .modern-mobile-menu {
            display: none;
          }

          .modern-sidebar {
            position: fixed;
            transform: translateX(0);
            width: 280px;
          }

          .mobile-overlay {
            display: none;
          }
        }

        @media (max-width: 767px) {
          .modern-sidebar {
            width: 280px;
          }
        }
      `}</style>
    </>
  );
}

export default Sidebar;
