import React, { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="about-section">
      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero">
          <div className="hero-content">
            <span className="section-badge">Introduction</span>
            <h1 className="hero-title">About Me</h1>
            <div className="hero-text">
              <p>
                Hello! I'm currently in my final year at Northeastern University, studying 
                Computer Science and Business Administration with a concentration in FinTech.
              </p>
              <p>
                Recently, I worked at PNC Bank as a Quantitative Analyst Intern, helping to 
                design and develop ML Algorithms. Shortly after, I went to MORSE Corp, where I built an 
                AI data quality toolkit for computer vision models.
              </p>
              <p>
                I enjoy running, the LA Lakers, playing guitar, cooking, and robotics.
              </p>
              <div className="cta-section">
                <a 
                  href="/Sidarth_Kulkarni_Resume.pdf" 
                  download="Sidarth_Kulkarni_Resume.pdf"
                  className="availability-badge resume-link"
                >
                  📄 Open to full-time opportunities
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <div className="skills-header">
            <span className="section-badge">Highlights</span>
            <h2 className="skills-title">Core Skills</h2>
          </div>
          
          <div className="skills-grid">
          <div className="skill-card">
              <div className="skill-icon">
                <span className="icon-emoji">🚀</span>
              </div>
              <div className="skill-content">
                <h3>Software Engineering</h3>
                <p>
                  I have built production ML and AI systems in high performance environments both locally and in the cloud. I am familiar with 
                  a variety of Programming Languages and Architectures. In addition, I have worked closely with customers in a variety of settings.
                </p>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <span className="icon-emoji">📊</span>
              </div>
              <div className="skill-content">
                <h3>Data Science</h3>
                <p>
                  I have experience modeling and analyzing complex trends in real-world data. 
                  I've built several pipelines in professional settings to accurately pre-process data.
                  Most importantly, I have an aptitude for condensing findings and presenting 
                  understandable results.
                </p>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <span className="icon-emoji">🎯</span>
              </div>
              <div className="skill-content">
                <h3>Product-Minded Development</h3>
                <p>
                  During my experience at SiPhox, I gained an understanding of how to develop 
                  with a customer-focused mindset. This comes from a personal interest in UX 
                  design and customer behavior trends.
                </p>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <span className="icon-emoji">🤝</span>
              </div>
              <div className="skill-content">
                <h3>Teamwork</h3>
                <p>
                  I've worked with teams with diverse backgrounds, including Data Scientists, 
                  Software Developers, Marketing Consultants, Silicon Photonic Engineers, and 
                  Graphic Designers. I've learned how to adapt and collaborate with a variety 
                  of different people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 4rem 0;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .about-section.fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        .about-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .about-hero {
          margin-bottom: 4rem;
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .hero-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
        }

        .hero-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #4b5563;
          margin-bottom: 2rem;
        }

        .hero-text p {
          margin-bottom: 1.5rem;
        }

        .cta-section {
          margin-top: 2rem;
        }

        .availability-badge {
          display: inline-block;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 1rem;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .resume-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
        }

        .resume-link:active {
          transform: translateY(0);
        }

        .skills-section {
          margin-top: 4rem;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .skills-title {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 700;
          margin-top: 1rem;
          color: #1f2937;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
        }

        .skill-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
          text-align: center;
        }

        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .skill-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .icon-emoji {
          font-size: 2rem;
        }

        .skill-content h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        .skill-content p {
          color: #6b7280;
          line-height: 1.7;
          font-size: 1rem;
        }

        @media (max-width: 767px) {
          .about-container {
            padding: 0 1rem;
          }
          
          .about-section {
            padding: 2rem 0;
          }
          
          .skill-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;