import React, { useEffect } from "react";
import About from "../components/about";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar";
import '../App.css';

const HomePage = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="modern-layout">
      <Sidebar />
      <main className="main-content">
        <div className="content-wrapper">
          <About />
          <Timeline />
        </div>
      </main>
      
      <style jsx>{`
        .modern-layout {
          display: flex;
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .main-content {
          flex: 1;
          margin-left: 0;
          padding: 2rem 0;
          transition: margin-left 0.3s ease;
        }

        .content-wrapper {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        @media (min-width: 768px) {
          .main-content {
            margin-left: 280px;
          }
        }

        @media (max-width: 767px) {
          .main-content {
            padding: 1rem 0;
          }
          
          .content-wrapper {
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;